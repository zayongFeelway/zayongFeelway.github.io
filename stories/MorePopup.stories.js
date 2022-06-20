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
};
