import { PolymerElement, html } from '@polymer/polymer';

export default class NavBar extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          background-color:turquoise;
          font-family: monospace;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 30px;
          margin: 0 0 30px;
        }

        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        button {
          border: none;
          font-family: monospace;
          font-size: 16px;
          background-color: gold;
          display: inline-block;
          cursor: pointer;
          color: #333;
          padding: 8px 16px;
          text-decoration: none;
          margin-right: 30px;
          box-shadow: 4px 4px black
        }

        button:hover {
          background-color: #378de5;
        }

        button:active {
          position: relative;
          top: 1px;
        }

        a {
          color: #333;
          text-decoration: none;
        }

        img {
          width: 60px;
          height: auto;
          border-radius: 50%;
          margin-right: 30px;
        }
      </style>

      <div>
        <img src="https://mir-s3-cdn-cf.behance.net/user/230/d55bc216964565.59ecc7a638aa5.jpg" />
        <a href="home">home</a>
      </div>

      <div>
        <button>login</button>
        <button>signup</button>
      </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);
