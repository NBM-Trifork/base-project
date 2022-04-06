import * as HeaderStories from '../../shared/components/header/Header.stories';

import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';

import {ButtonComponent} from '../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '../../shared/components/header/header.component';
import {PageComponent} from './page.component';

export default {
  title: 'Pages/Page',
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


export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args
}
// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log out/i });
  await userEvent.click(loginButton);
};
