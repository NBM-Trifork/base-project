import { Meta, Story, componentWrapperDecorator } from '@storybook/angular';
import { screen, userEvent } from '@storybook/testing-library';

import { ButtonComponent } from '../components/button/button.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Components/RegistrationForm',
  component: RegistrationFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, ReactiveFormsModule],
    }),
    // componentWrapperDecorator(
    //   (story) => `<div style="margin: 3em">${story}</div>`
    // ),
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<RegistrationFormComponent> = (
  args: RegistrationFormComponent
) => ({
  props: args,
});

export const FilledForm = Template.bind({});

FilledForm.play = async () => {
  const nameInput = screen.getByLabelText('Name', {
    selector: 'input',
  });

  await userEvent.type(nameInput, 'Nanna', {
    delay: 100,
  });
  const emailInput = screen.getByLabelText('Email', {
    selector: 'input',
  });

  await userEvent.type(emailInput, 'example-email@email.com', {
    delay: 100,
  });

  const phoneNumberInput = screen.getByLabelText('Phone Number', {
    selector: 'input',
  });

  await userEvent.type(phoneNumberInput, '33333333', {
    delay: 100,
  });

  const messageInput = screen.getByLabelText('Message', {
    selector: 'input',
  });

  await userEvent.type(messageInput, 'Jeg er interesseret i et job', {
    delay: 100,
  });

  const privacyInput = screen.getByLabelText('I agree to the privacy policy', {
    selector: 'input',
  });

  await userEvent.type(privacyInput, 'true', {
    delay: 100,
  });

  const Submit = screen.getByRole('button');

  await userEvent.click(Submit);
};


export const InvalidForm = Template.bind({});

InvalidForm.play = async () => {
  const nameInput = screen.getByLabelText('Name', {
    selector: 'input',
  });

  await userEvent.type(nameInput, 'Nanna', {
    delay: 100,
  });
  const emailInput = screen.getByLabelText('Email', {
    selector: 'input',
  });

  await userEvent.type(emailInput, 'example-email', {
    delay: 100,
  });

  const phoneNumberInput = screen.getByLabelText('Phone Number', {
    selector: 'input',
  });

  await userEvent.type(phoneNumberInput, 'not a phone numner', {
    delay: 100,
  });

  const messageInput = screen.getByLabelText('Message', {
    selector: 'input',
  });

  await userEvent.type(messageInput, 'Jeg er interesseret i et job', {
    delay: 100,
  });

  const privacyInput = screen.getByLabelText('I agree to the privacy policy', {
    selector: 'input',
  });

  await userEvent.type(privacyInput, 'false', {
    delay: 100,
  });

  const Submit = screen.getByRole('button');

  await userEvent.click(Submit);
};
