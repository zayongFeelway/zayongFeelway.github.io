import { InputCheckbox } from '../../components/input/InputCheckbox';


export default {
    title: 'Input/InputCheckbox'
};


const Template = (args) => InputCheckbox(args);

export const checkLabel = Template.bind({});
checkLabel.args = {
    CSS: `
    .hidden{position: absolute;width:1px;height:1px;margin:-1px;overflow: hidden;clip-path: polygon(0 0, 0 0, 0 0);}
    .checkboxLabel .InputCheckbox + label{display:block;width:100%;box-sizing:border-box;background:url("//icon.feelway.com/recent/mo/common/bullet/bul_checked_off.png") no-repeat 0 0/18px;color:#555555;font-size:13px;text-align:left;line-height:18px;}
    .checkboxLabel .InputCheckbox:checked + label{background-image:url("//icon.feelway.com/recent/mo/common/bullet/bul_checked_on.png");}
    .checkboxLabel li:first-child{border-top:0;}
    .checkboxLabel li .checkboxLabel__item__meta{margin-left:4vw;font-weight:bold;}
    .checkboxLabel li .checkboxLabel__item__meta .meta__date{font-size:4vw;}
    .checkboxLabel li .checkboxLabel__item__description{padding-top:3vw;display:block;}
    .checkboxLabel li .checkboxLabel__item__description .description__memo{font-size:3.5vw;line-height:4vw;}
        `
  };
