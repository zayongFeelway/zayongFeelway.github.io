import { html } from 'lit-html';

export const SubHeader = ({ util, label, backgroundColor, primay }) => { 
    const mode = primay ? 'margin-top:100px;' : 'margin-top:0;';
    
    return html`
    <div class="commonPrevHeader" style="${[`background-color:${backgroundColor};`, mode].join(" ")}">
        <div class="commonPrevHeader__prev">
            <button type="button" class="button" onclick="history.back()"><span class="hidden">이전</span></button>
        </div>
        <h1 class="commonPrevHeader__title">${label}</h1>
        <div class="commonPrevHeader__utill">
            <button type="button" class="button ${util} newAlarm"><span class="hidden">알림</span></button> <!-- 알림이 있을때 newAlarm 추가 -->
        </div> 
    </div>
    `
}