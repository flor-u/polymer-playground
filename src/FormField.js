import { PolymerElement, html } from '@polymer/polymer';

export default class FormField extends PolymerElement{
    static template = html `
    <style>

    </style>
  <label>[[label]]</label>
  <div >
    <input type="text" placeholder= 'your [[label]]'/>
  </div>
    `

    static get properties(){
        return {
            label:{
                type: String,
                value:''
            }

        }
    }
}

customElements.define('form-field', FormField)