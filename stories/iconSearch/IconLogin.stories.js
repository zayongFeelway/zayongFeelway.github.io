import { IconLogin } from '../../components/iconSearch/IconLogin';


export default {
    title: 'icon&Search/IconLogin'
};


const Template = (args) => IconLogin(args);

export const 아이콘로그인 = Template.bind({});
아이콘로그인.args = {
    CSS: `
.jjo-login-sns-wrap{padding:30px 60px;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6}
.jjo-login-sns-wrap button[class^='icon-join-']{display: inline-block;width: 40px;height: 20px;background-size: 40px;min-width: 55px;padding-top: 50px;font-size: 13px;color: #555;background-position: center 0;box-sizing: content-box;max-width: 55px;}
.icon-join-facebook{background: url(//icon.feelway.com/recent/pc/contents/login/img_snsicon01.gif) no-repeat center/100%;}
.icon-join-kakao{background: url(//icon.feelway.com/recent/pc/contents/login/img_snsicon02.gif) no-repeat center/100%;}
.icon-join-naver{background: url(//icon.feelway.com/recent/pc/contents/login/img_snsicon03.gif) no-repeat center/100%;}
.icon-join-wemakeprice{background: url(//icon.feelway.com/recent/pc/contents/login/img_snsicon04.gif) no-repeat center/100%;}
.icon-join-apple{background: url(//icon.feelway.com/recent/pc/contents/login/img_snsicon05.gif) no-repeat center/100%;position: relative;}
.icon-join-apple:after{content: '애플';position: absolute;bottom: 1px;left: 0;right: 0;}
        `
  };
