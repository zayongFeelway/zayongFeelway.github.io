import { InputCommon } from '../../components/input/InputCommon';


export default {
    title: 'Input/InputCommon'
};


const Template = (args) => InputCommon(args);

export const checkLabel = Template.bind({});
checkLabel.args = {
    CSS: `
    /* [공통] 폼 박스 스타일 */
    .cover{margin-top:50px;padding:25px 30px;background:#fff;}
    .cover:first-child{margin-top:0;}
    .titHeading{margin-bottom:20px;font-weight:bold;font-size:18px;}
    .codeDivide{display:block;margin:60px 0 60px;width:100%;height:1px;background: #ededed;border:0;}
    .styleGuide__contents{background:#f7f7f7;}
    
    /* [공통] 폼 스타일 */
    .commonForm {display:flex; justify-content:space-between; position:relative;}
    .commonForm + .commonForm {margin-top:15px;}
    .commonForm__divisionStyle01 {overflow:hidden;position:relative; width:calc(50% - 5px);}
    
    /* [공통] 인풋 클리어버튼 삭제 */
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration{display:none;}
    
    .selectStyle01 {width:100%; height:45px; padding:0 45px 0 10px; border:1px solid #e6e6e6; -webkit-box-sizing:border-box; box-sizing:border-box; background:#fff url('https://icon.feelway.com/recent/mo/common/bullet/bul_select05.png') no-repeat right 10px top 50%/12px 7px; color:#999999; border-radius:0; appearance:none; font-size:14px; line-height:45px;text-align:left;}
    .selectStyle01:disabled {border-color:#ccc;color:#999; background-color:#f3f4f6;}
    .selectStyle01 option{color:#999;}
    .selectStyle01 option:checked{color:#555}
    .inputStyle01 {width:100%; height:45px; padding:0 45px 0 10px; border:1px solid #e6e6e6; -webkit-box-sizing:border-box; box-sizing:border-box; background:#fff; color:#000; border-radius:0; -webkit-appearance:none; appearance:none; font-size:14px; line-height:45px;}
    .inputStyle01::placeholder {color:#999999; font-size:14px;}
    .inputStyle01:read-only { padding-right:10px;background:#f3f4f6; color:#999;}
    .inputClearBtnbox {position:relative;}
    .inputClearBtnbox .delBtn {display:none; position:absolute; top:0; right:0; width:45px; height:45px; background: url('//icon.feelway.com/recent/mo/common/button/btn_del.png') no-repeat right 15px top 50% / 15px; z-index:10; font-size:0; line-height:0;}
    .inputRequireError {border-color:#ec5026;}
    
    input[type="checkbox"].formCheckbox01 {display:none;}
    input[type="checkbox"].formCheckbox01 + label {display:inline-block; position:relative; padding-left:25px;border:none;color:#555555; vertical-align:middle; font-size:13px;}
    input[type="checkbox"].formCheckbox01 + label::after {content:''; position:absolute; top:2px; left:0; width:15px; height:15px; border:2px solid #999999; -webkit-box-sizing:border-box; box-sizing:border-box; background:#fff;}
    input[type="checkbox"].formCheckbox01:checked + label::after {border:none; background: url('//icon.feelway.com/recent/mo/common/bullet/bul_checked_on.png') no-repeat 0 0/15px;}
    
    input[type="checkbox"].formCheckbox02 {display:none;}
    input[type="checkbox"].formCheckbox02 + label {display:inline-block; position:relative; padding-left:28px; color:#555555; vertical-align:middle; font-size:14px;}
    input[type="checkbox"].formCheckbox02 + label::after {content:''; position:absolute; top:1px; left:0; width:18px; height:18px; -webkit-box-sizing:border-box; box-sizing:border-box; background: url('//icon.feelway.com/recent/mo/common/bullet/bul_checked_off02.png') no-repeat 0 0 / 18px;}
    input[type="checkbox"].formCheckbox02 + label .require {color:#ec5026;}
    input[type="checkbox"].formCheckbox02:checked + label::after {background: url('//icon.feelway.com/recent/mo/common/bullet/bul_checked_on02.png') no-repeat 0 0/18px;}
    
    input[type="checkbox"].formCheckbox03 {display:none;}
    input[type="checkbox"].formCheckbox03 + label {position: relative;display:inline-block;width:35px;height:20px;border-radius:15px;background:#cccccc;font-size:0;line-height: 0;vertical-align:middle;}
    input[type="checkbox"].formCheckbox03 + label::after {content:'';display:block;position:absolute;left:2px;top:2px;width:15px;height:15px;border-radius: 50%;background:#fff;transition: 0.3s;}
    input[type="checkbox"].formCheckbox03 + label::before {content:'받지않음';display:block;position:absolute;right:40px;top:4px;width: 50px;color:#cccccc;font-size:12px;line-height:1;text-align: right;}
    input[type="checkbox"].formCheckbox03:checked + label {background-color:#a07c4a;}
    input[type="checkbox"].formCheckbox03:checked + label::after {left: calc(100% - 2px);transform: translateX(-100%);}
    input[type="checkbox"].formCheckbox03:checked + label::before {content:'받음';color:#a07c4a;}
    
    input[type="radio"].formRadio01 {display:none;}
    input[type="radio"].formRadio01 + label {display:inline-block;position: relative;padding-left:28px;border:none;color:#555555;vertical-align: middle;font-size:14px;}
    input[type="radio"].formRadio01 + label::after {content:''; position:absolute; top:1px; left:0; width:18px; height:18px; -webkit-box-sizing:border-box; box-sizing:border-box; background: url('//icon.feelway.com/recent/mo/common/bullet/bul_radio_off.png') no-repeat 0 0 / 18px;}
    input[type="radio"].formRadio01 + label .require {color:#ec5026;}
    input[type="radio"].formRadio01:checked + label {}
    input[type="radio"].formRadio01:checked + label::after {background: url('//icon.feelway.com/recent/mo/common/bullet/bul_radio_on.png') no-repeat 0 0/18px;}
    
    /* [공통] textarea author:zayong */
    .textareaStyle01{display:block;width:100%;height:160px;padding:15px;border:1px solid #e6e6e6;box-sizing:border-box;font-size: 14px;color:#555;}
    .textareaStyle01::placeholder{color:#999}
    
    /* 버튼형 라디오버튼 */
    .radioTab {display:flex;}
    .radioTab .radioTab__radioButton {flex:1;-webkit-box-sizing:border-box; box-sizing:border-box;}
    .radioTab .radioTab__radioButton + .radioTab__radioButton {margin-left:-1px;}
    .radioTab .radioTab__radioButton input[type="radio"] {display:none;}
    .radioTab .radioTab__radioButton input[type="radio"] + label {display:flex; justify-content:center; height:40px; border:1px solid #ccc; text-align:center; align-items:center; font-size:13px;}
    .radioTab .radioTab__radioButton input[type="radio"]:checked + label {position:relative; border-color:#9f7c49; color:#9f7c49; z-index:1;}
    
    /* validation error */
    /* 필수입력 bullet */
    .inputRequireError {border-color:#ec5026;}
    /* 필수입력 에러메세지 */
    .requireErrorMessage {position:relative; margin-top:10px; padding-left:20px; color:#ec5026; line-height:18px; font-size:13px;}
    .requireErrorMessage:before {content:''; position:absolute; top:1px; left:0; width:16px; height:16px; background:#ec5026 url('//icon.feelway.com/recent/mo/contents/order/ico_require_error.png') no-repeat 50% 50% / 2px; border-radius:50%;}
    
    /* 배송지입력 */
    .inputForm__formTitle {margin-top:25px; color:#222; line-height:1; font-weight:400; font-size:14px;}
    .inputForm__formTitle:first-child, .inputForm__formTitle.first {margin-top:0;}
    .inputForm__formTitle .iconRequire { display:inline-block; width:6px; height:6px; margin:-3px 0 0 7px; background:#ec5026; color:transparent;vertical-align:middle; border-radius:50%; font-size:0;}
    .inputForm__formTitle + .inputWrap01 {margin-top:10px;}
    .inputForm__formTitle + .inputStyle01 {margin-top:10px;}
    .shippingAddressForm__searchZipcode {margin-top:25px;}
    .shippingAddressForm__searchZipcode .inputWrap01 {margin-top:6px;}
    .shippingAddressForm__searchZipcode__detail {position:relative; margin-top:10px; padding-right:98px;}
    .shippingAddressForm__searchZipcode__detail .searchAddressButton {position:absolute; top:0; right:0; width:93px; height:45px; background:#888; color:#fff; line-height:45px; font-size:13px;}
    .shippingAddressForm__guideText {position:relative; margin-top:8px; padding-left:10px; color:#999; font-size:13px; line-height:18px;}
    .shippingAddressForm__guideText:after { display:block; content:'';position:absolute; top:6px; left:0; width:3px; height:3px; background:#999;}
        `
  };
