import { ForeachTab } from '../../components/tab/ForeachTab';

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
,
  CSS : `.tab{display:flex;position:relative;}
.tab__item .tab__item__cont{display:none;position:absolute;left:0;}
.tab__item.on .tab__item__cont{display:block;}
.tab__item.on a {color: red;}
  `
};
