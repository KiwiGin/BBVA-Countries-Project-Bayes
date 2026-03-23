import { LitElement, html, unsafeCSS } from 'lit';
import '../ui/search-input/search-input.js';
import styles from './country-search.scss?inline';

export class CountrySearch extends LitElement {
  static properties = {
    _query: { type: String, state: true },
    _isSearching: { type: Boolean, state: true },
  };

  static styles = unsafeCSS(styles);

  constructor() {
    super();
    this._query = '';
    this._isSearching = false;
  }

  render() {
    return html`
      <search-input
        .value=${this._query}
        placeholder="Buscar país por nombre..."
        .searching=${this._isSearching}
        @search-input=${this._onInput}
      ></search-input>
      <div class="status" role="status" aria-live="polite">
        ${this._isSearching ? 'Buscando...' : ''}
      </div>
    `;
  }

  _onInput(e) {
    this._query = e.detail.value;
  }
}

customElements.define('country-search', CountrySearch);
