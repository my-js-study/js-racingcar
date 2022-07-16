import { CUSTOM_EVENT_NAME } from '../constants';
import { emit } from '../utils/dom';

interface EventListener {
  (event: Event): void;
}

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

  emitCustomEvent<T = unknown>(
    eventName: keyof typeof CUSTOM_EVENT_NAME,
    data: T,
  ) {
    emit<T>(this.element, eventName, data);
    return this;
  }

  addEventListener(eventName: string, handler: (e: Event) => void) {
    this.element.addEventListener(eventName, handler);
  }

  addCustomEventListener<T = unknown>(
    eventName: keyof typeof CUSTOM_EVENT_NAME,
    handler: (evt: CustomEvent<T>) => void,
  ) {
    this.element.addEventListener(eventName, handler as EventListener);
  }
}
