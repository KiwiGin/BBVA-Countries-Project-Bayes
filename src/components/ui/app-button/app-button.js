import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './app-button.scss?inline';

export class AppButton extends LitElement {
  static properties = {
    variant: { type: String },
    disabled: { type: Boolean, reflect: true },
  };

  static styles = unsafeCSS(styles);

  constructor() {
    super();
    this.variant = 'primary';
    this.disabled = false;
  }

  render() {
    const classes = {
      [this.variant]: true,
    };

    return html`
      <button
        class=${classMap(classes)}
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        <slot></slot>
      </button>
    `;
  }

  _onClick() {
    if (!this.disabled) {
      this.dispatchEvent(
        new CustomEvent('button-click', {
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}

customElements.define('app-button', AppButton);
