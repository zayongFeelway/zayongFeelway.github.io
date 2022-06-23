import { ButtonMore } from '../../components/button/ButtonMore';

export default {
  title: 'Button/ButtonMore'
};

const Template = (args) => ButtonMore(args);

export const 버튼더보기 = Template.bind({});
버튼더보기.args = {
    jQuery: `
$('.classification-more').on("click", function () {
  $('.classification-listwrap.type01, .classification-more').toggleClass("show");

  var arr = ['접기', '더보기'];
  var idx = arr.indexOf($(this).text());
  $('.classification-more .str').text(arr[++idx % 2]);
});
  `,
  CSS: `
.classification-morewrap {margin-top:-2px;border-top:1px solid #dddddd;background:#f5f5f5;font-size:0;line-height:0;text-align:center;}
.classification-more {width:78px;height:31px;border:1px solid #dddddd;border-top:none;-webkit-box-sizing: border-box;box-sizing: border-box;background:#ffffff;color:#555555;font-size:11px;}
.classification-more .str {display:inline-block;padding-right:16px;background: url('//icon.feelway.com/recent/pc/contents/plan/bg_btnbullet.gif') no-repeat right 6px;}
.classification-more.show .str {background-image: url('//icon.feelway.com/recent/pc/contents/plan/bg_btnbullet_on.gif')}
.classification-selectnamewrap {margin-top:21px;font-size:0;line-height:0;}
.classification-selectnamewrap .tag-select {display:inline-block;height:25px;padding:0 7px 0 12px;border:1px solid #7d7d7d;-webkit-box-sizing: border-box;box-sizing: border-box;border-radius: 16px;color: #555555;font-size: 12px;line-height:25px;vertical-align:middle;}
.classification-selectnamewrap .tag-select + .tag-select  {margin-left:14px;}
.classification-selectnamewrap .tag-select .del {display:inline-block;width:16px;height:25px;background: url('//icon.feelway.com/recent/pc/contents/plan/bg_tagclose.gif') no-repeat 50%;font-size:0;line-height:0;vertical-align:top;}
.classification-selectname-reset {position:relative;margin-left:26px;padding-left:19px;background: url('//icon.feelway.com/recent/pc/contents/plan/bg_reset.gif') no-repeat 0 5px;color:#222222;font-size:13px;vertical-align:middle;}
.classification-selectname-reset:after {content: " ";position:absolute;top:3px;left:-10px;display: block; width:1px; height:13px;background:#e6e6e6;}    
        `
  };
