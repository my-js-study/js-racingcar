import { CUSTOM_EVENT_NAME, ERROR_MESSAGE } from '../constants';

export function $<T = HTMLElement>(selector: string, scope?: HTMLElement): T {
  if (!selector) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

  const result = scope
    ? scope.querySelector(selector)
    : document.querySelector(selector);

  if (!result) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

  return result as unknown as T;
}

export function $$<T = HTMLElement>(
  selector: string,
  scope?: HTMLElement,
): T[] {
  if (!selector) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

  const result = scope
    ? scope.querySelectorAll(selector)
    : document.querySelectorAll(selector);

  if (!result) throw new Error(ERROR_MESSAGE.NO_SELECTOR);

  return Array.from(result) as unknown[] as T[];
}

export function emit<T = unknown>(
  target: Element,
  eventName: keyof typeof CUSTOM_EVENT_NAME,
  detail: T,
) {
  const event = new CustomEvent<T>(eventName, { detail });
  target.dispatchEvent(event);
}
