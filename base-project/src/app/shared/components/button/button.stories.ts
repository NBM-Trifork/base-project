import  * as ButtonDocumentation from './Button-Documentation.mdx';

// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';

import { ButtonComponent } from './button.component';
import { componentWrapperDecorator } from '@storybook/angular';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [withDesign,
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`)],
  parameters: {
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
  primary: true,
  label: 'Button',
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
};


export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
