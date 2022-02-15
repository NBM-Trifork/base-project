// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';

import { ButtonComponent } from './button.component';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withDesign]
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
