import { html } from 'lit-html';

export const IconFeelpon = () => {
  return html`
    <div class="clipTabContent__box__share">
		<a href="javascript:;" class="link" onclick="$.publish('viewDetail', 222381439831)">feelway.com/222381439831.html</a>
		<button type="button" class="btnCopy" onclick="$.publish('urlCopry', this)" data-url="https://www.feelway.com/222381439831.html">URL 복사</button>
		<ul class="snsShare">
			<li><button onclick="$.publish('snsShare', this)" class="btnKakao" id="kakao-link-brn-222381439831" data-share="{&quot;templateArgs&quot;:{&quot;TOP&quot;:&quot;https://img004.feelway.com/upfile017/GOODS/5950976462/small7374540016479378170b0e23c1fa0f53f717e98ba1c26c41f1.jpeg&quot;,&quot;LEFT&quot;:&quot;https://img004.feelway.com/upfile015/GOODS/5951003395/small37506000164793900645cb90061d234739f900cdd44a38cf54.jpeg&quot;,&quot;RIGHT&quot;:&quot;https://img006.feelway.com/upfile016/GOODS/6149342780/small3760840016554288777801576365eceab73ddeb7e4c2ce107d.jpeg&quot;,&quot;MO_LINK_PATH&quot;:&quot;222381439831.html&quot;,&quot;PC_LINK_PATH&quot;:&quot;222381439831.html&quot;,&quot;DYNAMIC_LINK&quot;:&quot;?link=https://www.feelway.com/222381439831.html&amp;&amp;apn=com.kamsung.feelway.mfeelway&amp;isi=1509419936&amp;ibi=com.feelway.app&quot;,&quot;TITLE&quot;:&quot;[ 필웨이 클립 온 ] Brunello Cucinelli &quot;,&quot;DESC&quot;:&quot;feelway_m님의  클립 온 FEELWAY 상품!!&quot;},&quot;templateId&quot;:74967}"><span class="hidden">카카오</span></button></li>
			<li><button onclick="$.publish('snsShare', this)" data-url="https://feelway.page.link/?link=https://www.feelway.com/222381439831.html&amp;&amp;apn=com.kamsung.feelway.mfeelway&amp;isi=1509419936&amp;ibi=com.feelway.app" data-title="[ 필웨이 클립 온 ] Brunello Cucinelli " class="btnFacebook"><span class="hidden">페이스북</span></button></li>
			<li><button onclick="$.publish('snsShare', this)" data-url="https://feelway.page.link/?link=https://www.feelway.com/222381439831.html&amp;&amp;apn=com.kamsung.feelway.mfeelway&amp;isi=1509419936&amp;ibi=com.feelway.app" data-title="[ 필웨이 클립 온 ] Brunello Cucinelli " class="btnTwt"><span class="hidden">트위터</span></button></li>
			<li><button onclick="$.publish('snsShare', this)" data-url="https://feelway.page.link/?link=https://www.feelway.com/222381439831.html&amp;&amp;apn=com.kamsung.feelway.mfeelway&amp;isi=1509419936&amp;ibi=com.feelway.app" data-title="[ 필웨이 클립 온 ] Brunello Cucinelli " class="btnNaver"><span class="hidden">네이버</span></button></li>
		</ul>
	</div>
  `
}