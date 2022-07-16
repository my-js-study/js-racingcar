import { ERROR_MESSAGE } from '../../constants';
import { $ } from '../../utils/dom';
import View from '../View';

export default class CarNameFieldView extends View {
  input: HTMLInputElement;
  button: HTMLButtonElement;

  constructor() {
    super($('#car-name-field'));

    this.input = $<HTMLInputElement>('input', this.element);
    this.button = $<HTMLButtonElement>('button', this.element);

    this.bindEvents();
  }

  bindEvents() {
    this.button.addEventListener('click', this.handleClickButton.bind(this));
  }

  handleClickButton() {
    const { value } = this.input;

    const carNames = value.split(',').map((carName) => carName.trim());

    const isAllValid = carNames.every(
      (carName) => carName && carName.length >= 1 && carName.length <= 5,
    );

    if (!isAllValid) {
      console.log(ERROR_MESSAGE.INVALID_NAME_LENGTH);
      return;
    }

    this.emitCustomEvent<{ carNames: string[] }>('saveCarNames', {
      carNames,
    });
  }
}
