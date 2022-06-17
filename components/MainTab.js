import { html } from 'lit-html';

const newToggle = true;
export const MainTab = ({ toggle }) => html`
<div class="tabWrap">
  <ul class="brandRanking_scoll__tabList">
    <li class="${toggle}"><button type="button" class="button btn__brandRanking__category">전체</button></li>
    <li><button type="button" class="button btn__brandRanking__category">여성의류</button></li>
  </ul>
</div>
`