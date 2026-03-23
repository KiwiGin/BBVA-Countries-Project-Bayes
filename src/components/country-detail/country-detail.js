import { LitElement, html, unsafeCSS } from 'lit';
import { map } from 'lit/directives/map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { when } from 'lit/directives/when.js';
import {
  ArrowLeft, MapPin, Globe, Users,
  Ruler, Clock, Languages, Coins,
} from 'lucide';
import { renderIcon } from '../../utils/icons.js';
import '../ui/app-badge/app-badge.js';
import styles from './country-detail.scss?inline';

export class CountryDetail extends LitElement {
  static properties = {
    country: { type: Object },
  };

  static styles = unsafeCSS(styles);

  constructor() {
    super();
    this.country = null;
  }

  // DECISION: connectedCallback para focus management en vez del constructor
  // porque el DOM del host debe estar conectado al documento para recibir foco
  // DECISION: bind del handler en constructor para poder hacer removeEventListener
  // con la misma referencia en disconnectedCallback
  _handleKeyDown = (e) => {
    if (e.key === 'Escape') this._onBack();
  };

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('tabindex', '-1');
    this.setAttribute('role', 'region');
    this.setAttribute('aria-label', 'Detalle del pais');
    requestAnimationFrame(() => this.focus());
    document.addEventListener('keydown', this._handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._handleKeyDown);
  }

  render() {
    if (!this.country) return html``;

    const c = this.country;
    const name = c.name?.common || 'Sin nombre';
    const official = c.name?.official;
    const capital = c.capital?.[0] || 'N/A';
    const region = c.region || 'N/A';
    const subregion = c.subregion;
    const population = c.population?.toLocaleString('es-ES') || 'N/A';
    const area = c.area ? `${c.area.toLocaleString('es-ES')} km²` : 'N/A';
    const flag = c.flags?.svg || c.flags?.png || '';
    const timezones = c.timezones || [];
    const languages = c.languages ? Object.values(c.languages) : [];
    const currencies = c.currencies ? Object.values(c.currencies) : [];

    return html`
      <div class="detail-header">
        <button
          class="back-btn"
          @click=${this._onBack}
          aria-label="Volver a la lista"
        >
          ${renderIcon(ArrowLeft, { size: 18 })} Volver
        </button>
      </div>

      <div class="detail-content">
        <div class="flag-section">
          <img
            src=${flag}
            alt=${ifDefined(flag ? `Bandera de ${name}` : undefined)}
          />
        </div>

        <div class="info-section">
          <h1>${name}</h1>
          ${when(official, () => html`
            <p class="official-name">${official}</p>
          `)}

          <div class="info-grid">
            <div class="info-item">
              <span class="label">${renderIcon(MapPin, { size: 12 })} Capital</span>
              <span class="value">${capital}</span>
            </div>
            <div class="info-item">
              <span class="label">${renderIcon(Globe, { size: 12 })} Region</span>
              <span class="value">${region}${when(subregion, () => html` / ${subregion}`)}</span>
            </div>
            <div class="info-item">
              <span class="label">${renderIcon(Users, { size: 12 })} Poblacion</span>
              <span class="value">${population}</span>
            </div>
            <div class="info-item">
              <span class="label">${renderIcon(Ruler, { size: 12 })} Area</span>
              <span class="value">${area}</span>
            </div>
          </div>

          ${when(languages.length, () => html`
            <div class="tags-section">
              <div class="tags-label">${renderIcon(Languages, { size: 12 })} Idiomas</div>
              <div class="tags">
                ${map(languages, (lang) => html`
                  <app-badge variant="info">${lang}</app-badge>
                `)}
              </div>
            </div>
          `)}

          ${when(currencies.length, () => html`
            <div class="tags-section">
              <div class="tags-label">${renderIcon(Coins, { size: 12 })} Monedas</div>
              <div class="tags">
                ${map(currencies, (cur) => html`
                  <app-badge variant="success">${cur.name} (${cur.symbol || '?'})</app-badge>
                `)}
              </div>
            </div>
          `)}

          ${when(timezones.length, () => html`
            <div class="tags-section">
              <div class="tags-label">${renderIcon(Clock, { size: 12 })} Zonas horarias</div>
              <div class="tags">
                ${map(timezones, (tz) => html`
                  <app-badge>${tz}</app-badge>
                `)}
              </div>
            </div>
          `)}

          <div class="extra-slot">
            <slot name="extra"></slot>
          </div>
        </div>
      </div>
    `;
  }

  _onBack() {
    this.dispatchEvent(
      // DECISION: composed: true para que el evento atraviese Shadow DOM boundaries
      // y el orquestador (country-explorer) pueda escucharlo
      new CustomEvent('country-detail-back', {
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define('country-detail', CountryDetail);
