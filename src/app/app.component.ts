import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  token: any;

  constructor() {
    this.token = JSON.parse(localStorage.getItem('token'));
  }

  logout() {
    localStorage.clear();
    location.reload();
  }
}
