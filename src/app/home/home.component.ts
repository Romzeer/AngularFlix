import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import {HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Category} from '../shared/models/category';
import {Films} from '../shared/models/films';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private token;
  films: Category[] = [];


  constructor(private api: ApiService, private router: Router) {

    this.token = JSON.parse(localStorage.getItem('token'));
  }

  ngOnInit() {

    if (this.token) {
      this.api.get(this.token);
      this.get();
      console.log(this.films);

    /*  this.films.forEach(function (value) {
        value.list.forEach(function (val) {
         // val = new Films();
          console.log(val);
        });
      });
*/

    }
    else {
      this.router.navigateByUrl('/login');
    }

  }

  private get() {
    this.films = this.api.getFilms();
  }

}
