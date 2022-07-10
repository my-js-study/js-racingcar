import { $, $$ } from '../../utils/dom';
import View from '../View';

export default class InputFormView extends View {
  nameInput: HTMLFieldSetElement;
  movementCount: HTMLFieldSetElement;

  constructor() {
    super($('#input-form'));
    [this.nameInput, this.movementCount] = $$<HTMLFieldSetElement>(
      'fieldset',
      this.element,
    );

    this.initialize();
  }

  initialize() {
    this.movementCount.style.display = 'none';
  }
}
