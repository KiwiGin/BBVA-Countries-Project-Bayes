import { LitElement, html, unsafeCSS } from 'lit';
import styles from './app-skeleton.scss?inline';

// DECISION: componente skeleton reutilizable con variantes en vez de crear
// un skeleton específico por componente, reduce duplicación de código
export class AppSkeleton extends LitElement {
  static properties = {
    variant: { type: String },
  };

  static styles = unsafeCSS(styles);

  constructor() {
    super();
    this.variant = 'text';
  }

  render() {
    if (this.variant === 'card') {
      return html`
        <div class="skeleton skeleton--card">
          <div class="skeleton skeleton--image"></div>
          <div class="skeleton-body">
            <div class="skeleton skeleton--title"></div>
            <div class="skeleton skeleton--text"></div>
            <div class="skeleton skeleton--text" style="width: 50%"></div>
          </div>
        </div>
      `;
    }

    return html`<div class="skeleton skeleton--${this.variant}"></div>`;
  }
}

customElements.define('app-skeleton', AppSkeleton);
