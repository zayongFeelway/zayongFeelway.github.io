import { Pagination } from '../components/Pagination';

export default {};

const Template = (args) => Pagination(args);

export const Basic = Template.bind({});
Basic.args = {
CSS:`.qnaPagination{margin-top:27px;text-align:center;}
.qnaPagination button,
.qnaPagination .page{display:inline-block;width:40%;vertical-align:middle;font-size:17px;color:#bbbbbb;}
.qnaPagination .page .current{color:#555555;}
.qnaPagination button{width:40px;height:40px;border:1px solid #bbbbbb;}
.qnaPagination button.first{background:url('//icon.feelway.com/recent/mo/contents/luxuryknowledge/ico_page_first.png') no-repeat center center;background-size:10px 11px;}
.qnaPagination button.prev{background:url('//icon.feelway.com/recent/mo/contents/luxuryknowledge/ico_page_prev.png') no-repeat center center;background-size:6px 11px;}
.qnaPagination button.next{background:url('//icon.feelway.com/recent/mo/contents/luxuryknowledge/ico_page_next.png') no-repeat center center;background-size:6px 11px;}
.qnaPagination button.last{background:url('//icon.feelway.com/recent/mo/contents/luxuryknowledge/ico_page_last.png') no-repeat center center;background-size:10px 11px;}`
};
