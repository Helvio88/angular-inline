import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild } from '@angular/core';

export interface InlineEditOptions {
  display?: 'image' | 'text';
  editType?: 'text' | 'number' | 'email' | 'url' | 'textarea' | 'date';
  image?: {
    width?: number;
    height?: number;
  };
  textarea?: {
    rows?: number;
  };
  date?: {
    format?: string;
    min?: Date;
    max?: Date;
  };
}

@Component({
  selector: 'inline-edit',
  styleUrls: ['./inline-edit.component.css'],
  template: `
    <!--Display-->
    <div *ngIf="!editing" (click)="edit()">
      <pre *ngIf="options.display !== 'image' && options.editType !== 'date'">{{ value }}</pre>
      <pre *ngIf="options.editType === 'date'" >{{ value | date:options.date.format }}</pre>
      <img *ngIf="options.display === 'image'" [width]="options.image.width" [height]="options.image.height" [src]="value">
    </div>

    <!--Edit - Not Date-->
    <mat-form-field *ngIf="editing && options.editType !== 'date'" style="width: 100%">
      <input matInput *ngIf="options.editType !== 'textarea'" [type]="options.editType"
        [placeholder]="placeholder" [maxlength]="maxlength" [(ngModel)]="value"
        (keydown.escape)="abandon()" (keydown.enter)="confirm()" #input>

      <textarea matInput *ngIf="options.editType === 'textarea'"  [rows]="options.textarea.rows"
        [placeholder]="placeholder" [maxlength]="maxlength" [(ngModel)]="value"
        (keydown.escape)="abandon()" #input></textarea>

      <mat-hint *ngIf="maxlength" align="end">{{value.length}} / {{ maxlength }}</mat-hint>

      <button mat-button matSuffix mat-icon-button (click)="confirm()">
        <mat-icon>save</mat-icon>
      </button>
    </mat-form-field>

    <!--Edit - Date-->
    <mat-form-field *ngIf="editing && options.editType === 'date'" style="width: 100%">
      <input matInput [matDatepicker]="picker" [placeholder]="placeholder" [(ngModel)]="value"
      [min]="options.date.min" [max]="options.date.max" (dateChange)="confirm()" (keydown.escape)="abandon()" #input>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `
})

export class InlineEditComponent implements OnInit {

  constructor(private changeDetector: ChangeDetectorRef) { }

  oldValue: any;
  editing: boolean;

  @ViewChild('input') input;

  @Input()
  value: any;

  @Output()
  valueChange = new EventEmitter<any>();

  @Input()
  options: InlineEditOptions;

  @Input()
  placeholder: string;

  @Input()
  maxlength: number;

  @Output()
  save = new EventEmitter();

  @Output()
  cancel = new EventEmitter();

  ngOnInit() {
    this.defaults();
  }

  edit() {
    this.oldValue = this.value;
    this.editing = true;
    this.changeDetector.detectChanges();
    setTimeout(() => this.input.nativeElement.focus());
  }

  confirm() {
    this.editing = false;
    this.valueChange.emit(this.value);
    this.save.emit();
  }

  abandon() {
    this.value = this.oldValue;
    this.editing = false;
    this.cancel.emit();
  }

  defaults() {
    this.options = this.options || {};
    this.options.display = this.options.display || 'text';
    this.options.editType = this.options.editType || 'text';

    this.options.image = this.options.image || {};
    this.options.image.width = this.options.image.width || 64;
    this.options.image.height = this.options.image.height || 64;

    this.options.textarea = this.options.textarea || {};
    this.options.textarea.rows = this.options.textarea.rows || 4;

    this.options.date = this.options.date || {};
    this.options.date.format = this.options.date.format || 'short';
  }

}
