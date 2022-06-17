import { MorePopup } from '../components/MorePopup';

export default {
    argTypes: {
        toggle: {
            control: { type: 'radio' },
            options: ['onSlide', ''],
        },
    }
};

const Template = (args) => MorePopup(args);

export const Basic = Template.bind({});
Basic.args = {};
