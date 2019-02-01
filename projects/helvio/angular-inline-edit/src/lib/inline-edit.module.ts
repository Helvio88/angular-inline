import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineEditComponent } from './inline-edit.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InlineEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports: [
    InlineEditComponent
  ]
})
export class InlineEditModule { }
