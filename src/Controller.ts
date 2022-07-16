import type { SaveCarNamesProps, SaveMovementCountProps } from './types';
import CarNameFieldView from './views/CarNameField';
import CurrentStateView from './views/CurrentState';
import MovementCountFieldView from './views/MovementCountField';
import RacingResultView from './views/RacingResult';

export default class Controller {
  carNames: string[];
  movementCount: number;

  constructor(
    private readonly carNameFieldView = new CarNameFieldView(),
    private readonly movementCountFieldView = new MovementCountFieldView(),
    private readonly currentStateView = new CurrentStateView(),
    private readonly racingResultView = new RacingResultView(),
  ) {
    this.carNames = [];
    this.movementCount = 0;
  }

  initialize() {
    this.renderInitialView();
    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.carNameFieldView.addCustomEventListener(
      'saveCarNames',
      this.handleSaveCarNames.bind(this),
    );

    this.movementCountFieldView.addCustomEventListener(
      'saveMovementCount',
      this.handleSaveMovementCount.bind(this),
    );
  }

  renderInitialView() {
    this.movementCountFieldView.hide();
    this.currentStateView.hide();
    this.racingResultView.hide();
  }

  handleSaveCarNames(e: CustomEvent<SaveCarNamesProps>) {
    this.carNames = e.detail.carNames;
    this.renderMovementCountField();
  }

  renderMovementCountField() {
    this.movementCountFieldView.show();
  }

  handleSaveMovementCount(e: CustomEvent<SaveMovementCountProps>) {
    this.movementCount = e.detail.movementCount;
    this.renderCurrentState();
    this.currentStateView.renderCarNameTags(this.carNames, this.movementCount);
  }

  renderCurrentState() {
    this.currentStateView.show();
  }
}
