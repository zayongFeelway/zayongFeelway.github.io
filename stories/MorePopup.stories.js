import { MorePopup } from '../components/MorePopup';

export default {
    title: 'POPUP/MorePopup',
    argTypes: {
        toggle: {
            control: { type: 'radio' },
            options: ['onSlide', ''],
        },
        
    }
};

const Template = (args) => MorePopup(args);

export const Basic = Template.bind({});
Basic.args = {
    jqeury: `
    if($('.moreInfomation').hasClass('onSlide')){
        $('.moreInfomation').removeClass('onSlide')
    }else{
        $('.moreInfomation').addClass('onSlide')
    }
    `
    ,CSS: `.goodsInfomation{position:relative;display:flex;}
    .goodsInfomation.disable{opacity:0.3;}
    .goodsInfomation__picture{position:relative;overflow:hidden;width:65px;height:65px;border-radius:5px; background:#f0f0f0 url("//icon.feelway.com/recent/mo/common/bg_empty.png") no-repeat center/40px 40px;}
    .goodsInfomation__picture::after {display: block;content: "";width: 100%;height: 100%;position: absolute;left: 0;top: 0;background-color: rgba(0,0,0,.04);}
    .goodsInfomation__picture img{width:100%;height:100%;}
    .goodsInfomation__picture + .goodsInfomation__description{width:calc(100% - 75px);padding:0 0 0 10px;}
    .goodsInfomation__description{display:flex;justify-content:center;width:100%;padding-top:4px;flex-direction:column;}
    .goodsInfomation__description__orderUserName{color:#222;font-size:12px;font-weight:bold;}
    .goodsInfomation__description__orderUserName .iconGrade{display:inline-block;width:16px;height:18px;margin:-3px 5px 0 0;vertical-align:middle;}
    .goodsInfomation__description__orderUserName .iconGrade.num1{background: url("//icon.feelway.com/recent/common/mo/grade/bg-rank-01.png") no-repeat center/16px 18px;}
    .goodsInfomation__description__orderUserName .iconGrade.num2{background: url("//icon.feelway.com/recent/common/mo/grade/bg-rank-02.png") no-repeat center/16px 18px;}
    .goodsInfomation__description__orderUserName .iconGrade.num3{background: url("//icon.feelway.com/recent/common/mo/grade/bg-rank-03.png") no-repeat center/16px 18px;}
    .goodsInfomation__description__orderUserName .iconGrade.num4{background: url("//icon.feelway.com/recent/common/mo/grade/bg-rank-04.png") no-repeat center/16px 18px;}
    .goodsInfomation__description__orderUserName .iconGrade.num5{background: url("//icon.feelway.com/recent/common/mo/grade/bg-rank-05.png") no-repeat center/16px 18px;}
    .goodsInfomation__description__orderUserName .iconGrade.num6{background: url("//icon.feelway.com/recent/common/mo/grade/bg-rank-06.png") no-repeat center/16px 18px;}
    .goodsInfomation__description__orderUserName .iconGrade img{width:100%;height:auto;vertical-align: middle;}
    .goodsInfomation__description__orderUserName .iconCurrent{display:inline-block;height:18px;margin:-4px 0 0 3px;padding:0 5px;background:#222;border-radius:3px;color:#fff;font-weight:normal;font-size:10px;line-height:18px;}
    .goodsInfomation__description__orderStatus{font-size:12px;color:#222;font-weight:bold;}
    .goodsInfomation__description__orderStatus.redFont{color:#ec5026;}
    .goodsInfomation__description__orderBrand{font-size:13px;color:#222;font-weight:bold;}
    .goodsInfomation__description__orderGoodsName{margin-top:2px;font-size:14px;color:#555;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
    .goodsInfomation__description__orderGoodsName.multiLine{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;word-wrap:break-word;white-space:initial;}
    .goodsInfomation__description__orderGoodsName .iconBold{font-weight:bold;}
    .goodsInfomation__description__orderGoodsName .iconText{height:18px;margin-right:3px;padding:0 5px;line-height:18px;background: #fff;border-radius: 4px;font-size: 10px;line-height:17px;vertical-align:middle;}
    .goodsInfomation__description__orderGoodsName .iconText.used{border: solid 1px #f6a43e;color:#f6a43e;}
    .goodsInfomation__description__orderPeriod{font-size:12px;color:#555; margin-top:2px;}
    .goodsInfomation__description__orderOption,
    .goodsInfomation__description__orderGift{margin-top:2px;font-size:12px;color:#999;}
    .goodsInfomation__description__orderOption,
    .goodsInfomation__description__orderGift .optionName{display:block;margin-top:3px;}
    .goodsInfomation__description__orderOption,
    .goodsInfomation__description__orderGift .optionName:first-child{margin-top:0;}
    .goodsInfomation__description__orderPrice{margin-top:10px;font-size:14px;color:#222;font-weight:bold;}
    .goodsInfomation__description__orderPrice .smallText{margin-right:3px;font-size:12px;font-weight:normal;}
    .goodsInfomation__description__orderPrice.redFont{color:#ec5026;}
    .goodsInfomation__description__topRightLink{position:absolute;top:0;right:0;padding-right:10px;font-size:12px;color:#222;background:url("//icon.feelway.com/recent/mo/contents/order/ico_arrowRight.png") no-repeat right center/5px 8px;}
    .goodsInfomation__description__topRightLink.redFont{color:#ec5026;background:url("//icon.feelway.com/recent/mo/contents/order/ico_arrowRight_red.png") no-repeat right center/5px 8px;}
    .goodsInfomation__description__link{font-size:12px;color:#ec5026;padding-top:10px}
    .goodsInfomation__description__link:after{content:"";display:inline-block;width:5px;height:8px;margin-left:4px;background:url("//icon.feelway.com/recent/mo/contents/order/ico_arrowRight_red.png") no-repeat right center/5px 8px;}
    .goodsInfomation__description__seller {margin-top:10px;color:#222;font-size:12px;font-weight:bold;}
    .goodsInfomation__description__seller .sellerId {display:inline-block;margin-left:3px;font-weight:normal;}
        `
};
