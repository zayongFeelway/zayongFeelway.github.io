import { MainTab } from '../../components/tab/MainTab';

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
  `,  
  CSS: `.brandRanking_scoll__tabList {overflow-x: auto;overflow-y: hidden;width: 100%;padding-right: 10px;box-sizing: border-box;white-space: nowrap;text-align: left;font-size: 0;}
.brandRanking_scoll__tabList::-webkit-scrollbar {background-color: transparent;}
.brandRanking_scoll__tabList li {display: inline-block;margin-left: 5px;}
.brandRanking_scoll__tabList li:first-child {margin-left: 15px;}
.brandRanking_scoll__tabList li .button {display: inline-block;height: 32px;padding: 0 10px;border-radius: 16px;box-sizing: border-box;border: 1px solid #d5d5d5;background: #fff;color: #d5d5d5;font-size: 12px;line-height: 32px;}
.brandRanking_scoll__tabList li.active .button {border-color: #222;color: #222;}
      `
};
