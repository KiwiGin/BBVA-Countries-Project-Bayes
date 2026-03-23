import { LitElement, html, unsafeCSS } from 'lit';
import { when } from 'lit/directives/when.js';
import { map } from 'lit/directives/map.js';
import { History } from 'lucide';
import { renderIcon } from '../../utils/icons.js';
import '../ui/search-input/search-input.js';
import styles from './country-search.scss?inline';

// DECISION: localStorage key como constante del módulo para evitar colisiones
// con otras apps que pudieran estar en el mismo dominio ejemplo localhost
const STORAGE_KEY = 'country-explorer:recent-searches';
const MAX_RECENT = 5;

export class CountrySearch extends LitElement {
  static properties = {
    _query: { type: String, state: true },
    _isSearching: { type: Boolean, state: true },
    _recentSearches: { type: Array, state: true },
  };

  static styles = unsafeCSS(styles);

  // DECISION: debounce manual en vez de librería (lodash) porque es una sola función
  // y no justifica añadir una dependencia externa para un setTimeout
  _debounceTimer = null;

  // DECISION: 300ms es el mínimo exigido por los requisitos y es suficiente para
  // evitar llamadas excesivas sin que el usuario perciba lag
  static DEBOUNCE_DELAY = 300;

  constructor() {
    super();
    this._query = '';
    this._isSearching = false;
    // DECISION: lectura de localStorage en constructor porque es síncrono
    // y necesitamos los datos antes del primer render
    this._recentSearches = this._loadRecent();
  }

  // DECISION: limpieza en disconnectedCallback y no en el constructor porque
  // el timer solo existe después del primer input, evitamos memory leaks al desmontar
  disconnectedCallback() {
    super.disconnectedCallback();
    this._clearDebounce();
  }

  render() {
    const showRecent = !this._isSearching && !this._query && this._recentSearches.length > 0;

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

      ${when(showRecent, () => html`
        <div class="recent-searches">
          <div class="recent-label">
            ${renderIcon(History, { size: 14 })} Búsquedas recientes
            <button class="recent-clear" @click=${this._clearRecent}>Limpiar</button>
          </div>
          <div class="recent-list" role="list" aria-label="Búsquedas recientes">
            ${map(this._recentSearches, (term) => html`
              <button
                class="recent-item"
                role="listitem"
                @click=${() => this._onRecentClick(term)}
              >
                ${term}
              </button>
            `)}
          </div>
        </div>
      `)}
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
    const trimmed = query.trim();

    if (trimmed) {
      this._saveRecent(trimmed);
    }

    this.dispatchEvent(
      new CustomEvent('country-search-change', {
        detail: { query: trimmed },
        bubbles: true,
        composed: true,
      })
    );
  }

  _onRecentClick(term) {
    this._query = term;
    this._emitSearch(term);
  }

  _loadRecent() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  _saveRecent(term) {
    // DECISION: filtrar duplicados y limitar a 5 para no saturar la UI
    // ni el localStorage con búsquedas obsoletas
    const filtered = this._recentSearches.filter(
      (t) => t.toLowerCase() !== term.toLowerCase()
    );
    const updated = [term, ...filtered].slice(0, MAX_RECENT);
    this._recentSearches = updated;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // localStorage lleno o no disponible, no es crítico
    }
  }

  _clearRecent() {
    this._recentSearches = [];
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // no es crítico
    }
  }

  _clearDebounce() {
    if (this._debounceTimer) {
      clearTimeout(this._debounceTimer);
      this._debounceTimer = null;
    }
  }
}

customElements.define('country-search', CountrySearch);
