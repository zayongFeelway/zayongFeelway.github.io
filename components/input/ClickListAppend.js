import { html } from 'lit-html';

const newToggle = true;
export const ClickList = () => {
  document.addEventListener('DOMContentLoaded', () => {
  const plusBtn = document.querySelectorAll('.plusBtn');
  const formWrap = document.querySelector('.formWrap');
  plusBtn.forEach( elm => {
      let i = 0;
      elm.addEventListener('click',function(){
          let plusLi = document.createElement('li');
          plusLi.innerHTML = '<input type="text" id="val'+i+'">'+i+'<a href="javascript:void(0)" class="deleteBtn">-</a>';
          formWrap.append(plusLi);
          i++; 
          let boxBtn = plusLi.querySelector('.deleteBtn');
          boxBtn.addEventListener('click',function(){ 
              boxBtn.parentNode.remove();
              console.log(boxBtn.parentNode)
          })
      }) 
  })
  
}, { once: true });


  return html`
    <div class="wrap">
        <button type="button" class="plusBtn">append</button>
        <ul class="formWrap"></ul>
    </div>
  `
}