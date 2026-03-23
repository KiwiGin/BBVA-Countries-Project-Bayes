import { html } from 'lit';
import { createElement } from 'lucide';

export function renderIcon(iconDefinition, options = {}) {
  const { size = 20, strokeWidth = 2 } = options;
  const el = createElement(iconDefinition);
  el.setAttribute('width', size);
  el.setAttribute('height', size);
  el.setAttribute('stroke-width', strokeWidth);
  return html`${el}`;
}
