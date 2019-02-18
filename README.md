[![Build Status][1]][2]

angular-inline
==============
A collection of Angular inline components. Today this collection is of 1. And it is a general purpose edit input.

Is it any good?
---------------
[Yes][3]

Install
-------

```node
npm install --save @helvio/angular-inline-edit
```

Import
------

In your `app.moddule.ts`:
```js
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InlineEditModule } from '@helvio/angular-inline-edit'; // Add This Line
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatRippleModule, MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    InlineEditModule, // Add This Line
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Use
---
```html
<inline-edit [(value)]="values.answer" [options]="textOptions" placeholder="What is the meaning of life?"></inline-edit>
```

| Variable      | Type                | Default     | Remarks                                                 |
| ------------- | ------------------- | ----------- | ------------------------------------------------------- |
| `value`       | `any`               | `null`      | Bidirectional `string`, `number` or `date` to be edited |
| `valueChange` | `@Output<any>`      |             | `EventEmitter` when saving                              |
| `options`     | `InlineEditOptions` | See Remarks | Complex Object described below                          |
| `placeholder` | `string`            | `null`      | Input box placeholder text                              |
| `maxlength`   | `number`            | `null`      | Input box maximum length. Will display hint.            |
| `save`        | `@Output<null>`     |             | `EventEmitter` when saving. Does not emit any value.    |
| `cancel`      | `@Output<null>`     |             | `EventEmitter` when cancel. Does not emit any value.    |

InlineEditOptions
-----------------

Interface:
```js
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
```

Default Values:

| Variable        | Default Value | Description                                                                             |
| --------------- | ------------- | --------------------------------------------------------------------------------------- |
| `display`       | 'text'        | Displays the object as text or image. For image, a URL is required.                     |
| `editType`      | 'text'        | Type of data to edit. Options are 'text', 'number', 'email', 'url', 'textarea', 'date'. |
| `image.width`   | 64            | When using `display = 'image'`, sets the image width.                                   |
| `image.height`  | 64            | When using `display = 'image'`, sets the image height.                                  |
| `textarea.rows` | 4             | When using `editType = 'textarea', sets the number of rows (lines).                     |
| `date.format`   | 'short'       | Date format to display when using `editType = 'date'`. See Angular Docs for details.    |
| `date.min`      | `null`        | Minimum date for Date Validation when using `editType = 'date'`.                        |
| `date.max`      | `null`        | Maximum date for Date Validation when using `editType = 'date'`.                        |

Hosted Demo
-----------
[Firebase][4]

Local Demo
----------
```
git clone https://github.com/Helvio88/angular-inline
cd angular-inline
npm install
ng build @helvio/angular-inline-edit
ng serve --open
```
[1]: https://travis-ci.org/Helvio88/angular-inline.svg?branch=master "Build Status"
[2]: https://travis-ci.org/Helvio88/angular-inline#
[3]: https://news.ycombinator.com/item?id=3067434
[4]: https://angular-inline.firebaseapp.com/
