import { ClickList } from '../../components/input/ClickListAppend';


export default {
    title: 'Input/ClickListAppend'
};


const Template = (args) => ClickList(args);

export const Input추가 = Template.bind({});
Input추가.args = {
    javascript: `
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
        `
  };
