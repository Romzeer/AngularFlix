import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-factory-input',
  templateUrl: './form-factory-input.component.html',
  styleUrls: ['./form-factory-input.component.scss']
})
export class FormFactoryInputComponent implements OnInit {

  @Input() input: any;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
