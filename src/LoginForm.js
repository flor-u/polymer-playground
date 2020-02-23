import { PolymerElement, html } from '@polymer/polymer';

export default class LoginForm extends PolymerElement {
  static template = html`
    <style>
      :host {
        background-color: turquoise;
        display: flex;
        padding: 20px;
        align-items: center;
        justify-content: space-evenly;
      }

      label {
        display: block;
        text-transform: uppercase;
        margin: 24px 0 8px;
      }
      button {
        color: #333;
        font-family: monospace;
        font-size: 16px;
        border: none;
        background-color: gold;
        width: 160px;
        padding: 16px;
        margin: 16px;
        box-shadow: 4px 4px black ;
      }

      input {
        width: 200px;
        border: 4px solid black;
        padding: 8px;
      }
    </style>

    <h3>Let's connect</h3>
    <div>
      <label>name</label>
      <input type="text" placeholder="your name" value="{{user.name::change}}" />
    </div>
    <div>
      <label>email</label>
      <input type="text" placeholder="your email" value="{{user.email::change}}" />
    </div>
    <div>
      <label>password</label>
      <input type="text" placeholder="your password" value="{{user.password::change}}" />
    </div>

    <button on-click="_submitForm">send</button>
  `;

  static get properties() {
    return {
      user: {
        type: Object,
        value: () => ({}),
      },
    };
  }

  _submitForm() {
    alert(this.user);
  }
}

customElements.define('login-form', LoginForm);
