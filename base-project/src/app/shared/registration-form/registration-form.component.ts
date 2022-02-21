import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../models/Contact';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(''),
    message: new FormControl(''),
    privacy: new FormControl(false, Validators.requiredTrue),
  });
  @Output() loggedIn = new EventEmitter<Contact>();
  constructor() {}

  ngOnInit(): void {}

  public onSubmit() {

    if (this.registrationForm.valid) {
      var contact: Contact = (
        this.registrationForm.value.name,
        this.registrationForm.value.email,
        this.registrationForm.value.phoneNumber,
        this.registrationForm.value.message,
        this.registrationForm.value.privacy
      );
      this.loggedIn.emit(contact);
      alert('Success');
    }
    alert('Error');
  }
}
