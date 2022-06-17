import { html } from 'lit-html';

export const Pagination = ({ util }) => html`
<div class="qnaPagination">
    <button type="button" class="first"><span class="hidden">처음으로</span></button>
    <button type="button" class="prev"><span class="hidden">이전으로</span></button>
    <div class="page"><span class="current">1</span> / <span class="total">17</span></div>
    <button type="button" class="next"><span class="hidden">다음으로</span></button>
    <button type="button" class="last"><span class="hidden">마지막으로</span></button>
</div>
`