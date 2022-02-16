import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.email),
    phoneNumber: new FormControl(''),
    message: new FormControl(''),
    privacy: new FormControl(false, Validators.requiredTrue),
  });
  constructor() {}

  ngOnInit(): void {}

  public onSubmit() {
    if (this.registrationForm.valid) {
      alert('Success');
    }
    alert('Error');
  }
}
