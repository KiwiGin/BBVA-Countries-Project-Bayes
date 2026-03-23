import { LitElement, html, unsafeCSS } from 'lit';
import styles from './app-spinner.scss?inline';

export class AppSpinner extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`<div class="spinner" role="status" aria-label="Cargando"></div>`;
  }
}

customElements.define('app-spinner', AppSpinner);
