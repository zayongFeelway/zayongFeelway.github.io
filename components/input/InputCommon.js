import { html } from 'lit-html';

export const InputCommon = () => {
  return html`
    <div class="styleGuide__contents mobile">
      <div class="cover">
        <h2 class="titHeading">인풋박스</h2>

        <div class="shippingRequest inputWrap01 inputClearBtnbox">
          <input type="text" class="inputStyle01" placeholder="요구사항을 입력해 주세요 (색상, 사이즈 등)">
          <button type="button" class="delBtn">삭제</button>
        </div>
      </div>

      <div class="cover">
        <h2 class="titHeading">셀렉트박스</h2>

        <select name="" id="" class="selectStyle01 inputRequireError">
          <option value="">입금할 은행을 선택하세요.</option>
          <option value="">국민은행</option>
          <option value="">신한은행</option>
        </select>
        <div class="requireErrorMessage">은행을 선택해 주세요.</div>
        <select name="" id="" class="selectStyle01" disabled="">
          <option value="">일시불</option>
          <option value="">2개월 할부</option>
          <option value="">3개월 할부</option>
        </select>
      </div>		

      <div class="cover">
        <h2 class="titHeading">주소 입력</h2>

        <h3 class="inputForm__formTitle">받는 분<i class="ico_require">필수입력</i></h3>
        <div class="inputWrap01 inputClearBtnbox">
          <input type="text" class="inputStyle01 inputRequireError">
          <button type="button" class="delBtn">삭제</button>
        </div>
        <p class="requireErrorMessage">받는 분 이름을 입력해 주세요.</p>

        <div class="shippingAddressForm__searchZipcode">
          <h3 class="inputForm__formTitle">주소<i class="ico_require">필수입력</i></h3>
          <div class="shippingAddressForm__searchZipcode__detail">
            <input type="text" class="inputStyle01 inputRequireError" readonly="">
            <button type="button" class="searchAddressButton">주소 검색</button>
          </div>
          <div class="inputWrap01">
            <input type="text" class="inputStyle01 inputRequireError" readonly="">
          </div>
          <div class="inputWrap01 inputClearBtnbox">
            <input type="text" class="inputStyle01 inputRequireError" placeholder="상세 주소를 입력해 주세요.">
            <button type="button" class="delBtn">삭제</button>
          </div>
          <p class="requireErrorMessage">받으실 배송지 주소를 입력해 주세요.</p>
        </div>

        <h3 class="inputForm__formTitle">휴대전화 번호<i class="ico_require">필수입력</i></h3>
        <div class="inputWrap01 inputClearBtnbox">
          <input type="number" class="inputStyle01 inputRequireError" placeholder="휴대전화 번호를 ‘-’ 없이 입력해 주세요.">
          <button type="button" class="delBtn">삭제</button>
        </div>
        <p class="requireErrorMessage">정확한 휴대전화 번호를 입력해 주세요.</p>

        <h3 class="inputForm__formTitle">전화번호</h3>
        <div class="inputWrap01 inputClearBtnbox">
          <input type="number" class="inputStyle01" placeholder="전화번호를 ‘-’ 없이 입력해 주세요.">
          <button type="button" class="delBtn">삭제</button>
        </div>
        <p class="shippingAddressForm__guideText">등록된 배송지는 자동으로 저장되어 다음 주문시에는 입력하지 않아도 됩니다.</p>
        <h3 class="inputForm__formTitle bold">요구사항</h3>
        <div class="inputWrap01 inputClearBtnbox">
          <input type="text" class="inputStyle01" placeholder="요구사항을 입력해 주세요 (색상, 사이즈 등)">
          <button type="button" class="delBtn">삭제</button>
        </div>

        <h3 class="inputForm__formTitle">textarea</h3>
        <div class="inputWrap01">
          <textarea name="" id="" cols="30" rows="10" class="textareaStyle01"></textarea>
        </div>
      </div>
    </div>
  `
}