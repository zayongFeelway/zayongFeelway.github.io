import { html } from 'lit-html';
import $ from "jquery";

const newToggle = true;
export const MorePopup = ({ toggle, eventNew }) => {

    const myFunction = () => {
        if($('.moreInfomation').hasClass('onSlide')){
            $('.moreInfomation').removeClass('onSlide')
        }else{
            $('.moreInfomation').addClass('onSlide')
        }
    }
    return html`
    <div class="moreInfomation moreButtons ${toggle}"> <!-- 앱일경우 bottom:0; 속성을 구분해줘야한다. -->
        <div class="moreInfomation__detailList">
            <div class="goodsInfomation">
                <div class="goodsInfomation__picture"><img src="https://img005.feelway.com/upfile016/GOODS/5874668705/small7813530016455952074d4b7cfcaeb005180b0fcce359e32148.jpeg" onerror="this.src='//icon.feelway.com/recent/mo/common/bg_empty2.png'" alt=""></div>
                <div class="goodsInfomation__description">
                    <div class="goodsInfomation__description__orderBrand">| Other Brand | otherddd</div>
                    <div class="goodsInfomation__description__orderGoodsName">기획팀 테스트 기획팀 테스트 기획팀 테스트</div>
                    <div class="goodsInfomation__description__orderGift" style="display: none;"></div>
                    <div class="goodsInfomation__description__orderOption">옵션선택 : 본품</div>
                    <div class="goodsInfomation__description__orderPrice">10,000원</div>
                </div>
            </div>
            <ul class="moreInfomation__orderBtnList"><li><a href="myOrderView.php?order_no=123234072088&amp;search_o_result=">주문상세</a></li><li><a href="/m/m_view_goods.php?g_no=5874668705#PD-inquiry">상품문의</a></li></ul>
        </div>
    
        <hr class="divideLine" style="display: none;">
    
        <div class="moreInfomation__sellerInfo" style="display: none;">
            <div class="moreInfomation__sellerInfo__sellerPicture" style="background-image: url(&quot;//icon.feelway.com/recent/mo/contents/mypage/bg_profile.png&quot;);"></div>
            <div class="moreInfomation__sellerInfo__sellerContact">
                <p class="sellerName"></p>
                <a href="#" class="sellerLink"></a>
                <button type="button" class="sellerChat"></button>
            </div>
    
        </div>
    
        <button class="btnMoreClose" @click=${myFunction}><span class="hidden">주문정보 더보기 닫기</span></button>
    </div>
    `
}