import { html } from 'lit-html';

const newToggle = true;
export const ForeachTab = ({ toggle }) => {
document.addEventListener("DOMContentLoaded", function(){
  const tabItem = document.querySelectorAll('.tab__item');

  tabItem.forEach(elm => {
    let elmBtn = elm.querySelector('.tab__item__link')
    //elm.querySelector('.tab__item__link').addEventListener('click',function(){
    elmBtn.addEventListener('click',function(){
      tabItem.forEach(evt => {evt.classList.remove('on');})
      elm.classList.add('on');
    })
  })
  
});


  return html`
  <div class="tabWrap">
	<ul class="tab">
		<li class="tab__item on">
			<a href="javascript:void(0)" class="tab__item__link">tab 1</a>
			<div class="tab__item__cont">
				1111111
			</div>
		</li>
		<li class="tab__item">
			<a href="javascript:void(0)" class="tab__item__link">tab 2</a>
			<div class="tab__item__cont">
				2222222222
			</div>
		</li>
		<li class="tab__item">
			<a href="javascript:void(0)" class="tab__item__link">tab 3</a>
			<div class="tab__item__cont">
				3333333333
			</div>
		</li>
		<li class="tab__item">
			<a href="javascript:void(0)" class="tab__item__link">tab 4</a>
			<div class="tab__item__cont">
				444444444
			</div>
		</li>
	</ul>
</div>
  `
}