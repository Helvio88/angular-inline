import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild } from '@angular/core';

export interface InlineEditOptions {
  display?: 'image' | 'text';
  class?: string;
  editType?: 'text' | 'number';
  imageWidth?: number;
  imageHeight?: number;
}

@Component({
  selector: 'inline-edit',
  template: `
    <!--Display-->
    <button mat-button *ngIf="!editing" (click)="edit()">
      <span *ngIf="options.display === 'text'" [class]="options.class">{{ value }}</span>
      <img *ngIf="options.display === 'image'" [class]="options.class"
        [width]="options.imageWidth" [height]="options.imageHeight" [src]="value">
    </button>

    <!--Edit-->
    <mat-form-field *ngIf="editing">
      <input matInput [type]="options.editType" [placeholder]="placeholder" [(ngModel)]="value"
        (keydown.escape)="abandon()" (keydown.enter)="confirm()" #input>
      <button mat-button matSuffix mat-icon-button (click)="confirm()">
        <mat-icon>save</mat-icon>
      </button>
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
    this.options.imageWidth = this.options.imageWidth || 64;
    this.options.imageHeight = this.options.imageHeight || 64;
  }

}
