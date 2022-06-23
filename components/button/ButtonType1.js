import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import $ from "jquery";

const newToggle = true;
export const ButtonType1 = ({ toggle, label, backgroundColor }) => {

  return html`
  <div class="buttonWrapper01">
    <a type="button" class="buttonBasic sizeSS" style=${styleMap({ backgroundColor })}>${label}</a>
  </div>
  `
}