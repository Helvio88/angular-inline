import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineEditComponent } from './inline-edit.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InlineEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    InlineEditComponent
  ]
})
export class InlineEditModule { }
