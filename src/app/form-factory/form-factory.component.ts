import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss']
})
export class FormFactoryComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() controls: any;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.controls.forEach((control) => {

      this.form.addControl(control.id, new FormControl(
        null,
        control.validators
      ));

    });
  }
  s
  submitEvent() {
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }

}
