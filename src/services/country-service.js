const BASE_URL = 'https://restcountries.com/v3.1';

const FIELDS = [
  'name', 'capital', 'region', 'subregion', 'population',
  'area', 'flags', 'languages', 'currencies', 'timezones',
  'cca3', 'borders',
].join(',');

// DECISION: singleton exportado en vez de clase estática porque permite
// mantener estado interno (_controller) y facilita testing con mocks
export class CountryService {
  _controller = null;

  async searchByName(query) {
    // DECISION: abort antes de cada nueva petición para cancelar la anterior
    // y evitar race conditions cuando el usuario escribe rápido
    this._abort();

    if (!query || query.trim().length === 0) {
      return [];
    }

    this._controller = new AbortController();

    try {
      const response = await fetch(
        `${BASE_URL}/name/${encodeURIComponent(query)}?fields=${FIELDS}`,
        { signal: this._controller.signal }
      );

      // DECISION: 404 no es un error sino "sin resultados", la API de restcountries
      // devuelve 404 cuando no encuentra coincidencias
      if (response.status === 404) {
        return [];
      }

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        return null;
      }
      throw error;
    } finally {
      this._controller = null;
    }
  }

  _abort() {
    if (this._controller) {
      this._controller.abort();
      this._controller = null;
    }
  }

  cancelPending() {
    this._abort();
  }
}

export const countryService = new CountryService();
