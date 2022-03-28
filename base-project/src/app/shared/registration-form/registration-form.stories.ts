import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story } from '@storybook/angular';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { ButtonComponent } from '../components/button/button.component';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './registration-form.component';
import { expect } from '@storybook/jest';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Components/RegistrationForm',
  component: RegistrationFormComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule, ReactiveFormsModule, FormsModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen'
  },
} as Meta;

const Template: Story<RegistrationFormComponent> = (args: RegistrationFormComponent) => ({
  props: args,
});


export const FilledForm = Template.bind({});
FilledForm.args = {
}
FilledForm.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe', {
    delay: 100,
  });
  await userEvent.type(canvas.getByLabelText('Email'), 'valid-email@gmail.com',{
    delay: 100,
  });
  await userEvent.type(canvas.getByLabelText('Phone Number'), '22223344', {
    delay: 100,
  });
  await userEvent.type(canvas.getByLabelText('Message'), 'I am interested in a job', {
    delay: 100,
  });
  await userEvent.type(canvas.getByLabelText('I agree to the privacy policy'), 'true', {
    delay: 100,
  });

  const button = await canvas.getByRole('button', { name: /Submit/i });
  await userEvent.click(button);
  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};

export const InvalidFilledForm = Template.bind({});
InvalidFilledForm.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByLabelText('Name'), 'Jane Doe', {
    delay: 100,
  });
  await userEvent.type(canvas.getByLabelText('Email'), 'Invalid-email',{
    delay: 100,
  });
  await userEvent.type(canvas.getByLabelText('Phone Number'), '22223344', {
    delay: 100,
  });
  await userEvent.type(canvas.getByLabelText('Message'), 'I am interested in a job', {
    delay: 100,
  });
  await userEvent.type(canvas.getByLabelText('I agree to the privacy policy'), 'false', {
    delay: 100,
  });
  const button = await canvas.getByRole('button', { name: /Submit/i });
  await userEvent.click(button);
  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};