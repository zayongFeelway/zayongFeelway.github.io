import { html } from 'lit-html';

export const IconLogin = () => {


  return html`
  <div class="jjo-login-sns-wrap">
        <button type="button" class="icon-join-facebook" onclick="window.open('https://www.facebook.com/v2.9/dialog/oauth?client_id=2262411317379880&amp;redirect_uri=https%3A%2F%2Fwww.feelway.com%2Ffacebook_callback.php&amp;state=&amp;response_type=code&amp;scope=public_profile%2Cemail', 'facebook_login', 'width=650, height=700, toolbar=no, location=no');"><span class="button-txt">페이스북</span></button>
        <button type="button" class="icon-join-kakao" id="kakao-login-btn" onclick="document.location.href='javascript:loginWithKakao();'"><span class="button-txt">카카오톡</span></button>
        <button type="button" class="icon-join-naver" onclick="document.location.href='https://nid.naver.com/oauth2.0/authorize?response_type=code&amp;client_id=vp_M2fMY9z3gzamSb0uy&amp;redirect_uri=https%3A%2F%2Fwww.feelway.com%2Fm%2Fnaver_callback_m1.php&amp;state=RAMDOM_STATE'"><span class="button-txt">네이버</span></button>
        <button type="button" class="icon-join-wemakeprice" onclick="window.open('https://login.wonders.app/wauth/authorize?response_type=code&amp;client_id=feelway_vdhRgnOPiA&amp;state=ZmVlbHNlY3JldHg3NHh4eHg=&amp;redirect_uri=https%3A%2F%2Fwww.feelway.com%2Fwemakeprice_callback.php&amp;scope=public_profile', 'wemakeprice_login', 'width=650, height=700, toolbar=no, location=no');"><span class="button-txt">위메프</span></button>
        <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
        <button type="button" class="icon-join-apple" id="appleid-signin" data-border="false" data-type="sign in" data-color="false">
          <div style=" font-synthesis: none; -moz-font-feature-settings: kern; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; width: 100%; height: 100%; min-width: 130px; max-width: 375px; min-height: 30px; max-height: 64px; position: relative; letter-spacing: initial;" role="button" tabindex="0" aria-label="Sign in with Apple">
              <div style=" width: 100%; height: 100%; box-sizing: border-box;">
                <svg xmlns="http://www.w3.org/2000/svg" style=" overflow: visible;" width="100%" height="100%">
                  <rect width="100%" height="100%" ry="15%" fill="#fff"></rect>
                </svg>
              </div>
          </div>
        </button>
  </div>
  `
}