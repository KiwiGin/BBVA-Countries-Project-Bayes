import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './app-badge.scss?inline';

export class AppBadge extends LitElement {
  static properties = {
    variant: { type: String },
  };

  static styles = unsafeCSS(styles);

  constructor() {
    super();
    this.variant = 'default';
  }

  render() {
    const classes = {
      badge: true,
      [this.variant]: true,
    };

    return html`
      <span class=${classMap(classes)}>
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('app-badge', AppBadge);
