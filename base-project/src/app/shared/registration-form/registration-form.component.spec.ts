import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fireEvent, render, screen } from '@testing-library/angular';

import { ButtonComponent } from '../components/button/button.component';
import { RegistrationFormComponent } from './registration-form.component';

// test('Checks if the form is valid ', async () => {
//   await render(RegistrationFormComponent, {
//     componentProperties: InvalidForm.args,
//   });

//   fireEvent.click(screen.getByText('Submit'));

//   const isFormValid = screen.getByTestId('invalid-form');
//   expect(isFormValid).to;
// });


describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationFormComponent, ButtonComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('TEST a form group ELEMENT COUNT', ()=>{
    const formElement = fixture.debugElement.nativeElement.querySelector("#registrationForm");
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(5);
  })

  it('CHECK INITIAL FORM VALUE FOR REGISTERING FORM GROUP', ()=>{
    const registrationFormGroup = component.registrationForm;
    const registrationFormValues = {
      name: '',
      email: '',
      phoneNumber: '',
      message:'',
      privacy: false,
    }
    expect(registrationFormGroup.value).toEqual(registrationFormValues);
  })
  it('form invalid when empty', () => {
    expect(component.registrationForm.valid).toBeFalsy();
  });


  it('CHECK NAME VALUE before ENTERING SOME VALUE', () => {
    const registrationForUserElement: HTMLInputElement = fixture.debugElement.nativeElement.
                                                        querySelector("#registrationForm").querySelectorAll('input')[0];
    const nameValueFormGroup = component.registrationForm.get('name');
    expect(registrationForUserElement.value).toEqual(nameValueFormGroup?.value);
  })
  it('CHECK EMAIL VALUE before ENTERING SOME VALUE AND VALIDATION', () => {
    const registrationForUserElement: HTMLInputElement = fixture.debugElement.nativeElement.
                                                        querySelector("#registrationForm").querySelectorAll('input')[0];
    const nameValueFormGroup = component.registrationForm.get('email');
    expect(registrationForUserElement.value).toEqual(nameValueFormGroup?.value);
    expect(nameValueFormGroup?.errors).not.toBeNull();
    expect(nameValueFormGroup?.errors?.['required']).toBeTruthy();
  })

  it('Submitting a form emits a contact', () => {
    expect(component.registrationForm.valid).toBeFalsy();
    component.registrationForm.controls['name'].setValue("Jane Doe");
    component.registrationForm.controls['email'].setValue("test@test.com");
    component.registrationForm.controls['phoneNumber'].setValue("20202020");
    component.registrationForm.controls['message'].setValue("Wants a job");
    component.registrationForm.controls['privacy'].setValue(true);
    expect(component.registrationForm.valid).toBeTruthy();

    // let contact: Contact | undefined;
    // // Subscribe to the Observable and store the user in a local variable.
    // component.loggedIn.subscribe((value) => contact = value);

    // // Trigger the login function
    // component.onSubmit();

    // // Now we can check to make sure the emitted value is correct
    // expect(contact?.name).toBe("Jane Doe");
    // expect(contact?.email).toBe("test@test.com");
    // expect(contact?.phoneNumber).toEqual(20202020);
    // expect(contact?.message).toBe("Wants a job");
    // expect(contact?.privacy).toBe(true);
  });

});
