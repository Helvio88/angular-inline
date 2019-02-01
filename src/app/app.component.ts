import { Component } from '@angular/core';
import { InlineEditOptions } from '@helvio/angular-inline-edit/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-inline';

  textOptions: InlineEditOptions = {
    display: 'text',
    editType: 'number'
  };

  imageOptions: InlineEditOptions = {
    display: 'image',
    editType: 'text',
    image: {
      height: 200,
      width: 150
    }
  };

  multiOptions: InlineEditOptions = {
    display: 'text',
    editType: 'textarea',
    textarea: {
      rows: 5
    }
  };

  dateOptions: InlineEditOptions = {
    display: 'text',
    editType: 'date',
    date: {
      format: 'full',
      max: new Date()
    }
  };

  textAreaOptions: InlineEditOptions = {};

  values = {
    image: 'https://images-na.ssl-images-amazon.com/images/I/81fpbxyyabL._UR150,200_FMJPG_.jpg',
    answer: 42,
    multi: 'This is a\nMulti Line\nText!',
    date: new Date()
  };
}
