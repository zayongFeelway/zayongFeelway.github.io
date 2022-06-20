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
Basic.args = {
  jqeury: `
  $('.brandRanking_scoll__tabList li').on({
    'click':function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    }
  })
      `
};
