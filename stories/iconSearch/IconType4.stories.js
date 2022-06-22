import { IconType4 } from '../../components/iconSearch/IconType4';


export default {
    title: 'icon&Search/IconType4'
};


const Template = (args) => IconType4(args);

export const Icon4 = Template.bind({});
Icon4.args = {
    CSS: `
    .plan-utill-wrap {float:right;margin:20px 0 0;font-size:0;line-height:0;}
    .plan-utill-wrap select {width:280px;height:34px;border:1px solid #222222;margin-left:15px;vertical-align:middle;color:#222222;font-size:15px;line-height:1.2;}
    .plan-utill-wrap img {margin:2px 0 0 7px;vertical-align:middle;}
        `
  };
