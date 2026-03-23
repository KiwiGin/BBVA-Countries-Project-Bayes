import { expect } from '@open-wc/testing';

describe('country-search debounce logic', () => {
  it('should only execute callback once after rapid calls within delay', async () => {
    let callCount = 0;
    let lastValue = '';
    const DEBOUNCE_DELAY = 300;
    let timer = null;
    function debouncedSearch(query) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callCount++;
        lastValue = query;
      }, DEBOUNCE_DELAY);
    }
    debouncedSearch('s');
    debouncedSearch('sp');
    debouncedSearch('spa');
    debouncedSearch('spai');
    debouncedSearch('spain');
    expect(callCount).to.equal(0);
    await new Promise((resolve) => setTimeout(resolve, 350));
    expect(callCount).to.equal(1);
    expect(lastValue).to.equal('spain');
  });

  it('should execute callback for each pause longer than delay', async () => {
    let callCount = 0;
    const DEBOUNCE_DELAY = 300;
    let timer = null;
    function debouncedSearch() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callCount++;
      }, DEBOUNCE_DELAY);
    }
    debouncedSearch('peru');
    await new Promise((resolve) => setTimeout(resolve, 350));
    expect(callCount).to.equal(1);
    debouncedSearch('chile');
    await new Promise((resolve) => setTimeout(resolve, 350));
    expect(callCount).to.equal(2);
  });
});
