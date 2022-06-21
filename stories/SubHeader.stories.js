import { SubHeader } from '../components/SubHeader';

export default { //공통속성
    title:'서브헤더',
    argTypes: {
        label: { control: 'text' },
        util: {
            control: { type: 'radio' },
            options: ['alarmButton', 'salesConversionButton', 'snsShareButton'],
        },  
    },
    
};

const Template = (args) => SubHeader(args);

export const 알람버튼 = Template.bind({}); //상황별 다른 속성
알람버튼.args = {
    primay:false,
    label:'필웨이알림',
    util: 'alarmButton',
    backgroundColor : 'white'
};

export const 판매자전환버튼 = Template.bind({});
판매자전환버튼.args = {
    label: '판매자전환',
    util: 'salesConversionButton',
    backgroundColor : 'white',
};

export const SNS공유버튼 = Template.bind({});
SNS공유버튼.args = {
    label: 'SNS공유',
    util: 'snsShareButton',
};