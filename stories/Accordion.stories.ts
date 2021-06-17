import { Story, Meta } from '@storybook/angular/types-6-0';
import { AccordionComponent } from '../projects/pattern-lib/src/lib/accordion/accordion.component';

export default {
  title: 'Atomics/Accordion',
  component: AccordionComponent,
  argTypes: {
    label: { control: 'text' },
    // we need to override here since in Angular it could be null as well (see button.component.ts) and therefore it would become an ambigious data type for storybook
  }
} as Meta;

const Template: Story<AccordionComponent> = (args: AccordionComponent) => ({
  component: AccordionComponent,
  props: args,
});

export const Accordion = Template.bind({});
Accordion.args = {
  label: 'Button',
};

export const FancyPinkButton = Template.bind({});
FancyPinkButton.args = {
  label: 'Pink version',
  pink: true,
};
