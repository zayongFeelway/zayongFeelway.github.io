import { IconFeelpon } from '../../components/iconSearch/IconFeelpon';


export default {
    title: 'icon&Search/IconFeelpon'
};


const Template = (args) => IconFeelpon(args);

export const 아이콘필폰 = Template.bind({});
아이콘필폰.args = {
    CSS: `
.clipTabContent__box__share {position: relative;}
.clipTabContent__box__share .link {font-size: 12px;color: #999;}
.clipTabContent__box__share .btnCopy {display: inline-block;height: 32px;margin-left: 33px;padding: 0 20px;border: 1px solid #222;border-radius: 16px;font-size: 12px;color: #222;box-sizing: border-box;line-height: 32px;}
.clipTabContent__box__share .snsShare {display: inline-block;margin-left: 17px;vertical-align: top;font-size: 0;}
.clipTabContent__box__share .snsShare li {display: inline-block;margin-left: 20px;}
.clipTabContent__box__share .snsShare li:first-child {margin-left: 0;}
.clipTabContent__box__share .snsShare button {width: 32px;height: 32px;border: 1px solid #222;border-radius: 50%;}
.clipTabContent__box__share .snsShare .btnKakao {background: url("//icon.feelway.com/recent/pc/clipon/ico_kakao.png") no-repeat center;}
.clipTabContent__box__share .snsShare .btnFacebook {background: url("//icon.feelway.com/recent/pc/clipon/icon_facebook.png") no-repeat center;}
.clipTabContent__box__share .snsShare .btnTwt {background: url("//icon.feelway.com/recent/pc/clipon/icon_twiter.png") no-repeat center;}
.clipTabContent__box__share .snsShare .btnNaver {background: url("//icon.feelway.com/recent/pc/clipon/icon_naver.png") no-repeat center;}
.clipTabContent__box__share .pagination {position: absolute;top: 2px;right: 0;vertical-align: 1px;}
.clipTabContent__box__share .pagination button {display: inline-block;width: 24px;height: 24px;border: solid 1px #d5d5d5;box-sizing: border-box;}
.clipTabContent__box__share .pagination .btnPrev {background: url("//icon.feelway.com/recent/pc/clipon/icon_prev.png") no-repeat center;}
.clipTabContent__box__share .pagination .btnNext {background: url("//icon.feelway.com/recent/pc/clipon/icon_next.png") no-repeat center;}
.clipTabContent__box__share .pagination .pageNum {display: inline-block;width: auto;margin: 0 10px;font-size: 14px;color: #666666;vertical-align: -5px;}
.clipTabContent__box__share .pagination .swiper-pagination-current {font-weight: bold;}
        `
  };
