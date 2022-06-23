import { SearchBrand } from '../../components/iconSearch/SearchBrand';


export default {
    title: 'icon&Search/SearchBrand'
};


const Template = (args) => SearchBrand(args);

export const 브랜드검색박스 = Template.bind({});
브랜드검색박스.args = {
    CSS: `
.classification-brandwrap {margin-top:20px;}
.classification-search {position:relative;width:175px;height:40px;padding:0 0 0 35px;border:1px solid #222222;-webkit-box-sizing: border-box;box-sizing: border-box;background: url('//icon.feelway.com/recent/pc/contents/plan/bg_search.gif') no-repeat 9px 10px;}
.classification-search:focus {padding:0 0 0 34px;border-width:2px;background: url('//icon.feelway.com/recent/pc/contents/plan/bg_search.gif') no-repeat 8px 9px;}
        `
  };

  