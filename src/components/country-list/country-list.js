import { LitElement, html, unsafeCSS } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { choose } from 'lit/directives/choose.js';
import { MapPin, Globe, ChevronDown } from 'lucide';
import { renderIcon } from '../../utils/icons.js';
import '../ui/app-card/app-card.js';
import '../ui/app-button/app-button.js';
import '../ui/app-skeleton/app-skeleton.js';
import styles from './country-list.scss?inline';

export class CountryList extends LitElement {
  static properties = {
    countries: { type: Array },
    loading: { type: Boolean },
    error: { type: String },
    _visibleCount: { type: Number, state: true },
  };

  static styles = unsafeCSS(styles);

  static SKELETON_COUNT = 6;

  // DECISION: límite de 12 resultados por página para no saturar la vista
  // y mejorar el rendimiento de renderizado en dispositivos móviles
  static PAGE_SIZE = 12;

  constructor() {
    super();
    this.countries = [];
    this.loading = false;
    this.error = '';
    this._visibleCount = CountryList.PAGE_SIZE;
  }

  // DECISION: resetear paginación en willUpdate cuando cambian los countries
  // porque es el ciclo previo al render, evita un render extra vs updated
  willUpdate(changedProps) {
    if (changedProps.has('countries')) {
      this._visibleCount = CountryList.PAGE_SIZE;
    }
  }

  render() {
    // DECISION: choose para manejar estados mutuamente excluyentes (loading/error/empty/data)
    // en vez de ifs anidados, más declarativo y legible
    return html`
      ${choose(this._getState(), [
        ['loading', () => this._renderSkeletons()],
        ['error', () => this._renderError()],
        ['empty', () => this._renderEmpty()],
        ['data', () => this._renderGrid()],
      ])}
    `;
  }

  _getState() {
    if (this.loading) return 'loading';
    if (this.error) return 'error';
    if (this.countries.length === 0) return 'empty';
    return 'data';
  }

  _renderSkeletons() {
    return html`
      <div class="country-grid">
        ${Array.from({ length: CountryList.SKELETON_COUNT }, () => html`
          <app-skeleton variant="card"></app-skeleton>
        `)}
      </div>
    `;
  }

  _renderError() {
    return html`
      <div class="state-message state-message--error">
        <p>${this.error}</p>
        <app-button variant="secondary" @button-click=${this._onRetry}>
          Reintentar
        </app-button>
      </div>
    `;
  }

  _renderEmpty() {
    return html`
      <div class="state-message">
        <p>Escribe el nombre de un pais para comenzar la busqueda</p>
      </div>
    `;
  }

  _renderGrid() {
    const visible = this.countries.slice(0, this._visibleCount);
    const hasMore = this.countries.length > this._visibleCount;

    return html`
      <div class="country-grid">
        ${repeat(
          visible,
          (country) => country.cca3,
          (country) => this._renderCard(country)
        )}
      </div>
      ${hasMore ? html`
        <div class="load-more">
          <app-button variant="secondary" @button-click=${this._loadMore}>
            ${renderIcon(ChevronDown, { size: 16 })} Cargar mas
            (${this.countries.length - this._visibleCount} restantes)
          </app-button>
        </div>
      ` : ''}
    `;
  }

  _loadMore() {
    this._visibleCount += CountryList.PAGE_SIZE;
  }

  _renderCard(country) {
    const name = country.name?.common || 'Sin nombre';
    const capital = country.capital?.[0] || 'N/A';
    const region = country.region || 'N/A';
    const flag = country.flags?.svg || country.flags?.png || '';

    return html`
      <app-card
        clickable
        @card-click=${() => this._onSelect(country)}
      >
        <div slot="header" class="country-card">
          <div class="flag-container">
            <img src=${flag} alt="Bandera de ${name}" loading="lazy" />
          </div>
          <div class="info">
            <h3>${name}</h3>
            <p>${renderIcon(MapPin, { size: 14 })} ${capital}</p>
            <p>${renderIcon(Globe, { size: 14 })} ${region}</p>
          </div>
        </div>
      </app-card>
    `;
  }

  _onSelect(country) {
    this.dispatchEvent(
      new CustomEvent('country-select', {
        detail: { country },
        bubbles: true,
        composed: true,
      })
    );
  }

  _onRetry() {
    this.dispatchEvent(
      new CustomEvent('country-retry', {
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define('country-list', CountryList);
