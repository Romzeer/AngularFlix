import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import { NgForm} from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: String;
  password: String;

  private _subParams;

  constructor(private api: ApiService, private router: Router) {

  }

  ngOnInit() {
   // this.api.post();
  }


  onSubmit(myForm: NgForm) {
    this.login = myForm.form.value.login;
    this.password = myForm.form.value.password;

    this.api.post(this.login, this.password);
    this.router.navigateByUrl('/');
  }


}
