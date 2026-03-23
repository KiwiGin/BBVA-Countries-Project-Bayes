import { LitElement, html, unsafeCSS } from 'lit';
import { when } from 'lit/directives/when.js';
import { styleMap } from 'lit/directives/style-map.js';
import { countryService } from '../../services/country-service.js';
import '../country-search/country-search.js';
import '../country-list/country-list.js';
import '../country-detail/country-detail.js';
import styles from './country-explorer.scss?inline';

// DECISION: un solo componente orquestador maneja el estado global en vez de
// un state manager externo (Redux, MobX) porque la app tiene un único flujo
// lineal (buscar - listar - detalle) y no justifica la complejidad extra
export class CountryExplorer extends LitElement {
  static properties = {
    _countries: {
      type: Array,
      state: true 
    },
    _selectedCountry: {
      type: Object,
      state: true 
    },
    _loading: {
      type: Boolean,
      state: true 
    },
    _error: {
      type: String,
      state: true 
    },
    _lastQuery: {
      type: String,
      state: true 
    }
  };

  static styles = unsafeCSS(styles);

  constructor() {
    super();
    this._countries = [];
    this._selectedCountry = null;
    this._loading = false;
    this._error = '';
    this._lastQuery = '';
  }

  // DECISION: disconnectedCallback para cancelar peticiones pendientes y evitar
  // actualizar estado de un componente desmontado (memory leak)
  disconnectedCallback() {
    super.disconnectedCallback();
    countryService.cancelPending();
  }

  render() {
    const isDetailView = this._selectedCountry !== null;

    // DECISION: styleMap para ocultar secciones en vez de no renderizarlas,
    // así se preserva el estado del input de búsqueda al volver del detalle
    const listViewStyles = {
      display: isDetailView ? 'none' : 'block',
    };

    return html`
      <div style=${styleMap(listViewStyles)}>
        <div class="explorer-search">
          <country-search
            @country-search-change=${this._onSearch}
          ></country-search>
        </div>

        ${when(this._lastQuery && !this._loading && !this._error, () => html`
          <div class="results-count">
            ${this._countries.length} resultado(s) para "${this._lastQuery}"
          </div>
        `)}

        <country-list
          .countries=${this._countries}
          .loading=${this._loading}
          .error=${this._error}
          @country-select=${this._onCountrySelect}
          @country-retry=${this._onRetry}
        ></country-list>
      </div>

      ${when(isDetailView, () => html`
        <country-detail
          .country=${this._selectedCountry}
          @country-detail-back=${this._onBack}
        ></country-detail>
      `)}
    `;
  }

  async _onSearch(e) {
    const query = e.detail.query;
    this._lastQuery = query;

    if (!query) {
      this._countries = [];
      return;
    }

    this._loading = true;
    this._error = '';

    try {
      const results = await countryService.searchByName(query);
      // DECISION: null indica petición cancelada (AbortController), no actualizamos
      // el estado para no sobreescribir resultados de una búsqueda más reciente
      if (results !== null) {
        this._countries = results;
      }
    } catch {
      this._error = 'Error al buscar paises. Intenta de nuevo.';
    } finally {
      this._loading = false;
    }
  }

  _onCountrySelect(e) {
    this._selectedCountry = e.detail.country;
  }

  _onBack() {
    this._selectedCountry = null;
  }

  _onRetry() {
    if (this._lastQuery) {
      this._onSearch({ detail: { query: this._lastQuery } });
    }
  }
}

customElements.define('country-explorer', CountryExplorer);
