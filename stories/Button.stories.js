import { Button } from '../components/Button';

export default {
  title: 'Button/Button',
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
  }
};

const Template = (args) => Button(args);

export const 버튼1 = Template.bind({}); //상황별 다른 속성
버튼1.args = {
    label:'확인1',
};

export const 버튼2 = Template.bind({});
버튼2.args = {
    label: '확인2',
};

export const 버튼3 = Template.bind({});
버튼3.args = {
    label: '확인3',
};