import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from '../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import GsapIntroduction from './gsap-introduction.mdx';
import { GsapIntroductionComponent } from './gsap-introduction.component';

export default {
  title: 'Pages/GSAP Introduction',
  component: GsapIntroductionComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
    docs: {
      page: GsapIntroduction,
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<GsapIntroductionComponent> = (
  args: GsapIntroductionComponent
) => ({
  props: args,
});

export const gsap = Template.bind({});
gsap.args = {
  cookieEase: 'back.out(1.7)',
  panelEase: 'Circ.easeOut',
  section3Ease: 'back.out(1.7)'
};
