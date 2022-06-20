import { MainTab } from '../components/MainTab';

export default {
  title: 'tab/MainTab',
  argTypes: {
      toggle: {
          control: { type: 'radio' },
          options: ['active', ''],
      },
  }
};

const Template = (args) => MainTab(args);

export const 메인탭 = Template.bind({});
메인탭.args = {
  jqeury: `
  $('.brandRanking_scoll__tabList li').on({
    'click':function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    }
  })
      `
};
