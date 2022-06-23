import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import $ from "jquery";

const newToggle = true;
export const ButtonMore = ({ toggle, eventNew }) => {

  $('.classification-more').on("click", function () {
		$('.classification-listwrap.type01, .classification-more').toggleClass("show");

		var arr = ['접기', '더보기'];
		var idx = arr.indexOf($(this).text());
		$('.classification-more .str').text(arr[++idx % 2]);
	});


  return html`
  <div class="classification-morewrap">
      <button type="button" class="classification-more"><span class="str">더보기</span></button>
  </div>
  `
}