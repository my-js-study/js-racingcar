import { ERROR_MESSAGE } from '../../constants';
import { $ } from '../../utils/dom';
import View from '../View';

export default class MovementCountFieldView extends View {
  input: HTMLInputElement;
  button: HTMLButtonElement;

  constructor() {
    super($('#movement-count-field'));

    this.input = $<HTMLInputElement>('input', this.element);
    this.button = $<HTMLButtonElement>('button', this.element);

    this.bindEvents();
  }

  bindEvents() {
    this.button.addEventListener('click', this.handleClickButton.bind(this));
  }

  handleClickButton() {
    const value = Number(this.input.value);

    if (value < 1) {
      alert(ERROR_MESSAGE.SMALL_NUMBER);
      return;
    }

    this.emitCustomEvent('saveMovementCount', {
      movementCount: value,
    });
  }
}
