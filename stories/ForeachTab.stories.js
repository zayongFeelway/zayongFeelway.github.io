import { ForeachTab } from '../components/ForeachTab';

export default {
  title: 'TAB/ForeachTab'
};

const Template = (args) => ForeachTab(args);

export const 자바스크립트탭 = Template.bind({});
자바스크립트탭.args = {
  javascript: `
  const tabItem = document.querySelectorAll('.tab__item');
  tabItem.forEach(elm => {
    let elmBtn = elm.querySelector('.tab__item__link')
    elmBtn.addEventListener('click',function(){
      tabItem.forEach(evt => {evt.classList.remove('on');})
      elm.classList.add('on');
    })
  })
  
      `
};
