import { html } from 'lit-html';

export const InputCheckbox = () => {
  return html`
    <ul class='checkboxLabel'> 
      <li class='checkboxLabel__item'>
          <input type=checkbox name=check_box_main_no id='aa' class='InputCheckbox hidden' />
          <label for='aa'>
              <span class='checkboxLabel__item__meta'>
                  <span class='meta__date'>2022-06-21</span>
              </span>
              <span class='checkboxLabel__item__description'>
                  <span class='description__memo'>text</span>
              </span>
          </label>
        </li>   
    </ul>
  `
}