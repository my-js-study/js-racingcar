import { emit } from '../utils/dom.js';

export default class View {
  element: HTMLElement;
  originalDisplay: CSSStyleDeclaration['display'];

  constructor(element: HTMLElement) {
    this.element = element;

    this.originalDisplay = this.element.style.display || '';
  }

  hide() {
    this.element.style.display = 'none';
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  emit<T>(eventName: string, data: T) {
    emit(this.element, eventName, data);
    return this;
  }

  addEventListener(eventName: string, handler: (e: Event) => void) {
    this.element.addEventListener(eventName, handler);
  }
}
