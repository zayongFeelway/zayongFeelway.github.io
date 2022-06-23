import { html } from 'lit-html';

export const IconBlackSearch = () => {
  return html`
    <div class="plan-utill-wrap">
				<img src="//icon.feelway.com/recent/pc/contents/plan/img_plan_sns01.gif" alt="url복사" class="copyHref clipboardElm" data-clipboard-text="https://www.feelway.com/event/planShop.php?event_id=4">
				<img src="//icon.feelway.com/recent/pc/contents/plan/img_plan_sns02.gif" id="btn-share-kakao" alt="카카오톡">
				<img src="//icon.feelway.com/recent/pc/contents/plan/img_plan_sns03.gif" id="btn-share-twitter" onclick="go_sns_page('twitter');" alt="트위터">
				<img src="//icon.feelway.com/recent/pc/contents/plan/img_plan_sns04.gif" id="btn-share-facebook" onclick="go_sns_page('facebook');" alt="페이스북">
				<select id="sel-other-plan-shop-list">
					<option value="">다른 기획전 보기</option>
					<option value="206">[종합] 바캉스 룩</option>
				</select>
    </div>
  `
}