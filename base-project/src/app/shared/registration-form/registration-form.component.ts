import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../models/Contact';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent{
  @Input() registration = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl(''),
    message: new FormControl(''),
    privacy: new FormControl(false, Validators.requiredTrue),
  });
  @Output() loggedIn = new EventEmitter<Contact>();


  public onSubmit() {
    return () => {
      console.log('onSubmit');
      if (this.registration.valid) {
        var contact: Contact =
          (this.registration.value.name,
          this.registration.value.email,
          this.registration.value.phoneNumber,
          this.registration.value.message,
          this.registration.value.privacy);
        this.loggedIn.emit(contact);
        alert('Success');
      }
      alert('Error');
    };
  }
}
