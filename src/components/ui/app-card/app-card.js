import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './app-card.scss?inline';

export class AppCard extends LitElement {
  static properties = {
    clickable: { type: Boolean },
  };

  static styles = unsafeCSS(styles);

  constructor() {
    super();
    this.clickable = false;
  }

  render() {
    const classes = {
      card: true,
      clickable: this.clickable,
    };

    return html`
      <div
        class=${classMap(classes)}
        tabindex=${this.clickable ? '0' : '-1'}
        role=${this.clickable ? 'button' : 'article'}
        @click=${this._onClick}
        @keydown=${this._onKeyDown}
      >
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }

  _onClick() {
    if (this.clickable) {
      this.dispatchEvent(
        new CustomEvent('card-click', {
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  _onKeyDown(e) {
    if (this.clickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      this._onClick();
    }
  }
}

customElements.define('app-card', AppCard);
