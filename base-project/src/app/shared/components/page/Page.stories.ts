import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';

import {ButtonComponent} from '../button/button.component';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../header/header.component';
import {PageComponent} from './page.component';

export default {
  title: 'Components/Page',
  component: PageComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, HeaderComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<PageComponent> = (args: PageComponent) => ({
  props: args,
});

export const LoggedOut = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
