import {
  EACH_RACING_TIME,
  FORWARDABLE_NUMBER,
  RANDOM_NUMBER,
} from '../../constants';
import { $, $$ } from '../../utils/dom';
import { delay, getRandomNumber } from '../../utils/racingCar';
import View from '../View';
import Template from './index.template';

export default class CurrentStateView extends View {
  template: Template;
  cars: HTMLDivElement[];
  movementCount: number;

  constructor() {
    super($('#current-state'));
    this.template = new Template();

    this.cars = [];
    this.movementCount = 0;
  }

  renderCarNameTags(carNames: string[], movementCount: number) {
    this.element.innerHTML = this.template.getNameTag(carNames);
    this.cars = $$<HTMLDivElement>('.car-player-wrapper', this.element);
    this.movementCount = movementCount;

    this.startCarRacing();
  }

  async startCarRacing() {
    const renderRacingStatus = () => this.renderRacingStatus();

    const racingStatuses = Array(this.movementCount).fill(renderRacingStatus);

    for (const racingStatus of racingStatuses) {
      await racingStatus();
    }
  }

  renderRacingStatus() {
    return new Promise((resolve) => {
      this.cars.forEach(async (element) => {
        element.insertAdjacentHTML('beforeend', this.template.getSpinnerIcon());

        await delay(EACH_RACING_TIME);

        $('.spinner-icon', element).remove();

        const isCarMovingForward =
          getRandomNumber(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX) >=
          FORWARDABLE_NUMBER;

        isCarMovingForward &&
          element.insertAdjacentHTML(
            'beforeend',
            this.template.getForwardIcon(),
          );
      });

      setTimeout(() => {
        resolve(null);
      }, EACH_RACING_TIME);
    });
  }
}
