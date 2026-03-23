import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { live } from 'lit/directives/live.js';
import { Search } from 'lucide';
import { renderIcon } from '../../../utils/icons.js';
import styles from './search-input.scss?inline';

export class SearchInput extends LitElement {
  static properties = {
    value: { type: String },
    placeholder: { type: String },
    searching: { type: Boolean },
  };

  static styles = unsafeCSS(styles);

  constructor() {
    super();
    this.value = '';
    this.placeholder = 'Buscar...';
    this.searching = false;
  }

  render() {
    const containerClasses = {
      'search-container': true,
      searching: this.searching,
    };

    return html`
      <div class=${classMap(containerClasses)}>
        <span class="search-icon" aria-hidden="true">${renderIcon(Search)}</span>
        <input
          type="search"
          placeholder=${this.placeholder}
          .value=${live(this.value)}
          @input=${this._onInput}
          aria-label=${this.placeholder}
        />
      </div>
    `;
  }

  _onInput(e) {
    this.dispatchEvent(
      new CustomEvent('search-input', {
        detail: { value: e.target.value },
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define('search-input', SearchInput);
