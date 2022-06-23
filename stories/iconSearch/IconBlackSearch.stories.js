import { IconBlackSearch } from '../../components/iconSearch/IconBlackSearch';


export default {
    title: 'icon&Search/IconBlackSearch'
};


const Template = (args) => IconBlackSearch(args);

export const 아이콘블랙서치박스 = Template.bind({});
아이콘블랙서치박스.args = {
    CSS: `
.plan-utill-wrap {float:right;margin:20px 0 0;font-size:0;line-height:0;}
.plan-utill-wrap select {width:280px;height:34px;border:1px solid #222222;margin-left:15px;vertical-align:middle;color:#222222;font-size:15px;line-height:1.2;}
.plan-utill-wrap img {margin:2px 0 0 7px;vertical-align:middle;}
        `
  };
