import type { Meta, Story } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';
import  ButtonDocumentation from './Button-Documentation.mdx';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [withDesign],
  addParameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
    docs: {
      page: ButtonDocumentation,
    }
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  primary: true,
  size: 'medium'
};

Primary.parameters ={
  design: {
      type: 'figma',
      url: 'https://www.figma.com/file/SYjB6DD4YlJY1WdSqTYHsM/AngularComponents?node-id=29%3A217',
    },
}
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  primary: false,
  size: 'medium'
};


export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};