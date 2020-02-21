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
        background: var(--my-card-background, white);
      }

      img {
        max-width: 400px;
      }
      .info {
        padding: 20px;
      }

      :host([selected]) {
        background: var(--my-card-background, yellow);
      }
    </style>

    <div>
      <img src="[[src]]" />
      <div class="info">
        <h3>Background [[title]]</h3>
        <p>[[text]]</p>
        <input type="checkbox" onclick="_selectedCard" />
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
      selected: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
    };
  }

  _selectedCard() {
    this.selected = !this.selected;
  }
}

customElements.define('play-ground', PlayGround);
