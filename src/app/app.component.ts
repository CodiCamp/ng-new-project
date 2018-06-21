import { Component } from '@angular/core';
import { trainsList } from './trains';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';
  logoUrl = 'assets/logo.svg';
  myType = 'text';
  trains = trainsList;

  updateTitle(value: string) {
    console.log(value);
    this.title = value;
  }

  changeType(value: string) {
    console.log(value);
    this.myType = value;
  }
}
