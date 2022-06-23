import { html } from 'lit-html';

export const SearchMain = () => {
  return html`
<form method="get" action="/tobe/page/search/result.php" id="findTotalSearchKeyword" name="searchKeyword" accept-charset="UTF-8" class="header__skelecton__searchKeyword">
  <fieldset>
    <legend>통합검색폼</legend>
    <div class="field">
        <input type="text" name="searchTerm" class="text" id="findTotalListText" placeholder="여름 휴가를 위한 스타일링 추천" maxlength="40" autocomplete="off" value="">
        <div class="findTotalListBox" id="findTotalListBox"></div>
        <button type="submit" class="button button--submit"><span>검색하기</span></button>
    </div>
    <input type="hidden" name="sort" value="update_dt">
  </fieldset>
</form>
  `
}