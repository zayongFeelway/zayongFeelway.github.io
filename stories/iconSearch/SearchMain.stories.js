import { SearchMain } from '../../components/iconSearch/SearchMain';


export default {
    title: 'icon&Search/SearchMain'
};


const Template = (args) => SearchMain(args);

export const 메인검색박스 = Template.bind({});
메인검색박스.args = {
    CSS: `
.header__skelecton__searchKeyword {position: absolute;top: 30px;right: 0;border: 2px solid #222;margin: 28px 0 0;}
.header__skelecton__searchKeyword fieldset{padding:0;}
.header__skelecton__searchKeyword legend {display: none}
.header__skelecton__searchKeyword .field {position: relative}
.header__skelecton__searchKeyword .field .select {padding: 0 5px 0 5px;vertical-align: top;height: 38px;border: none;background-color: #fff;font-size: 13px;appearance: none;color: #555}
.header__skelecton__searchKeyword .field .text {border: 0;vertical-align: top;padding: 0 50px 0 20px;width: 244px;height: 38px;font-size: 14px;line-height: 38px;box-sizing: content-box;}
.header__skelecton__searchKeyword .field .button {vertical-align: top;border: 0;padding: 0;background: transparent;cursor: pointer;}
.header__skelecton__searchKeyword .field .button.button--submit {position: absolute;top: 0;right: 0;height: 38px;width: 50px;background: url("https://www.feelway.com/tobe/resource/image/icon/icon_20by20_zoom.png") no-repeat center;overflow: hidden}
.header__skelecton__searchKeyword .field .button.button--submit span {color: rgba(0, 0, 0, 0)}
        `
  };

  