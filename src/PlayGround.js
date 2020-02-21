import { PolymerElement, html } from '@polymer/polymer';

export default class PlayGround extends PolymerElement {
  static template = html`
    <style>
      :host {
        display: flex;
        color: black;
        font-family: monospace;
        border: 4px solid black;
        width: 400px;
        margin-bottom: 30px;
      }

      img {
        max-width: 400px;
      }
      .info {
        padding: 20px;
      }
    </style>

    <div>
      <img src="[[src]]" />
      <div class="info">
        <h3>Background [[title]]</h3>
        <p>[[text]]</p>
      </div>
    </div>
  `;

  static get properties() {
    return {
      src: {
        type: String,
        value: 'image-source',
      },
      title: { type: String, value: 'number' },
      text: { type: String, value: 'description' },
    };
  }
}

customElements.define('play-ground', PlayGround);
