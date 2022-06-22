import { html } from 'lit-html';

export const IconType4 = () => {
  return html`
    <div class="plan-utill-wrap">
				<img src="//icon.feelway.com/recent/pc/contents/plan/img_plan_sns01.gif" alt="url복사" class="copyHref clipboardElm" data-clipboard-text="https://www.feelway.com/event/planShop.php?event_id=4">
				<img src="//icon.feelway.com/recent/pc/contents/plan/img_plan_sns02.gif" id="btn-share-kakao" alt="카카오톡">
				<img src="//icon.feelway.com/recent/pc/contents/plan/img_plan_sns03.gif" id="btn-share-twitter" onclick="go_sns_page('twitter');" alt="트위터">
				<img src="//icon.feelway.com/recent/pc/contents/plan/img_plan_sns04.gif" id="btn-share-facebook" onclick="go_sns_page('facebook');" alt="페이스북">
				<select id="sel-other-plan-shop-list"><option value="">다른 기획전 보기</option><option value="206">[종합] 바캉스 룩</option><option value="205">[시계] ROLEX 3% 기획전</option><option value="204">[슈즈] 여성 명품 샌들/스니커즈/플랫슈즈</option><option value="202">[남성] 2022 상반기 BEST AWARDS</option><option value="179">[잡화] 휘뚜루마뚜루 벨트 BEST</option><option value="161">▒ 프리미엄 배송관</option><option value="101">▒  하이엔드 브랜드관</option><option value="4" selected="selected">▒  프리미엄 렌탈관</option></select>
    </div>
  `
}