import { expect } from '@open-wc/testing';
import { CountryService } from '../src/services/country-service.js';

describe('CountryService', () => {
  it('should return empty array for 404 (no results)', async () => {
    const service = new CountryService();
    const results = await service.searchByName('zzzznotacountry');
    expect(results).to.be.an('array');
    expect(results).to.have.length(0);
  });

  it('should return null when request is aborted', async () => {
    const service = new CountryService();
    const promise = service.searchByName('argentina');
    service.cancelPending();
    const result = await promise;
    expect(result).to.be.null;
  });
});
