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
    imageWidth: 150,
    imageHeight: 200
  };

  values = {
    image: 'https://images-na.ssl-images-amazon.com/images/I/81fpbxyyabL._UR150,200_FMJPG_.jpg',
    answer: 42
  };
}
