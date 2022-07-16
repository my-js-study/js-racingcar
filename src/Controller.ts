import CarNameFieldView from './views/CarNameField';
import CurrentStateView from './views/CurrentState';
import MovementCountFieldView from './views/MovementCountField';
import RacingResultView from './views/RacingResult';

interface EventListener {
  (event: Event): void;
}

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
      this.handleSaveCarNames.bind(this) as EventListener,
    );

    this.movementCountFieldView.addCustomEventListener(
      'saveMovementCount',
      this.handleSaveMovementCount.bind(this) as EventListener,
    );
  }

  renderInitialView() {
    this.movementCountFieldView.hide();
    this.currentStateView.hide();
    this.racingResultView.hide();
  }

  handleSaveCarNames(e: CustomEvent) {
    this.carNames = e.detail.carNames;
    this.renderMovementCountField();
  }

  renderMovementCountField() {
    this.movementCountFieldView.show();
  }

  handleSaveMovementCount(e: CustomEvent) {
    this.movementCount = e.detail.movementCount;
    this.renderCurrentState();
    this.currentStateView.renderCarNameTags(this.carNames, this.movementCount);
  }

  renderCurrentState() {
    this.currentStateView.show();
  }
}
