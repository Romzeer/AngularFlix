import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Category} from '../models/category';
import {User} from "../models/user";



@Injectable()
export class ApiService {


  public response: any;
  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  private category: Category[];


  constructor(private http: HttpClient, private router: Router) {
  }

  public getFilms(): Category[] {

    const films: Category[] = JSON.parse(localStorage.getItem('films'));
    this.category = (films ? films : []);
    return this.category;
}




  public post(login, password) {
    return this.http.post('https://api.visio-nr.com/netflix/login',
    {
      email: login,
      password: password
    })
    .subscribe(
      res => {
       // console.log(res);
        this.response = res;
       // console.log(this.response.data);
        localStorage.setItem('token', JSON.stringify(this.response.data.token));
        this.router.navigateByUrl('/');
        location.reload();
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  public get(token) {

    return this.http.get('https://api.visio-nr.com/netflix/list', {
      params: new HttpParams().set('token', token)
    })
      .subscribe(
        res => {

          const films: Category[] = res.data.list;

          this.category = (films ? films : []);
          localStorage.setItem('films', JSON.stringify(this.category));

        },
        err => {
          console.log('Error occured');
        }
      );
  }

  public newUser(user: User) {

    return this.http.post('https://api.visio-nr.com/netflix/signup', user)
      .subscribe(
        res => {

            this.response = res;
            if (this.response.data.success === true) {
              localStorage.setItem('token', JSON.stringify(this.response.data.token));
              this.router.navigateByUrl('/');
              location.reload();

            }


        },
        err => {
          console.log('Error occured');
          this.router.navigateByUrl('/register');
        }
      );
  }



}
