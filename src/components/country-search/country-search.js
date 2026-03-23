import { LitElement, html, unsafeCSS } from 'lit';
import '../ui/search-input/search-input.js';
import styles from './country-search.scss?inline';

export class CountrySearch extends LitElement {
  static properties = {
    _query: { type: String, state: true },
    _isSearching: { type: Boolean, state: true },
  };

  static styles = unsafeCSS(styles);

  /** @type {number|null} */
  _debounceTimer = null;

  static DEBOUNCE_DELAY = 300;

  constructor() {
    super();
    this._query = '';
    this._isSearching = false;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._clearDebounce();
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
    this._isSearching = true;
    this._clearDebounce();

    this._debounceTimer = setTimeout(() => {
      this._emitSearch(this._query);
    }, CountrySearch.DEBOUNCE_DELAY);
  }

  _emitSearch(query) {
    this._isSearching = false;
    this.dispatchEvent(
      new CustomEvent('country-search-change', {
        detail: { query: query.trim() },
        bubbles: true,
        composed: true,
      })
    );
  }

  _clearDebounce() {
    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
      this._debounceTimer = null;
    }
  }
}

customElements.define('country-search', CountrySearch);
