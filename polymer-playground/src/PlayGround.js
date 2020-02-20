import { html, css, LitElement } from 'lit-element';

export class PlayGround extends LitElement {
  static get styles() {
    return css`
      :host {
        --polymer-playground-text-color: #000;

        display: block;
        padding: 25px;
        color: var(--polymer-playground-text-color);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
