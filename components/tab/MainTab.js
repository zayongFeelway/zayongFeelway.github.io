import { html } from 'lit-html';
import $ from "jquery";

const newToggle = true;
export const MainTab = ({ toggle }) => {

  $(function(){
    $('.brandRanking_scoll__tabList li').on({
      'click':function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    })
  });

  return html`
  <div class="tabWrap">
    <ul class="brandRanking_scoll__tabList">
      <li class="${toggle}"><button type="button" class="button btn__brandRanking__category">전체</button></li>
      <li><button type="button" class="button btn__brandRanking__category">여성의류</button></li>
    </ul>
  </div>
  `
}