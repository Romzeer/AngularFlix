import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { UserF } from './../shared/models/user-f';
import {ApiService} from '../shared/services/api.service';
import {User} from '../shared/models/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  form: FormGroup = null;
  controls: any = null;
  private token;

  constructor(private api: ApiService, private router: Router) {

    this.token = JSON.parse(localStorage.getItem('token'));
    if (this.token) {
      router.navigateByUrl('/');
    }
    const userForm = new UserF();
    this.form = new FormGroup({});
    this.controls = userForm.form;
  }

  ngOnInit() {
  }

  submit(values) {
    const user = new User();
    user.password = values.password;
    user.email = values.email;
    user.lastname = values.lastname;
    user.firstname = values.firstname;
    this.api.newUser(user);
    this.router.navigateByUrl('/');

  }

}
