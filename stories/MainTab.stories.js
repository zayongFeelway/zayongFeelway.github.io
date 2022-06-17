import { MainTab } from '../components/MainTab';

export default {
  argTypes: {
      toggle: {
          control: { type: 'radio' },
          options: ['active', ''],
      },
  }
};

const Template = (args) => MainTab(args);

export const Basic = Template.bind({});
Basic.args = {};