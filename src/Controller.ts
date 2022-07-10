import CurrentStateView from './Views/CurrentState';
import InputFormView from './Views/InputForm';
import RacingResultView from './Views/RacingResult';

interface Constructors {
  inputFormView: InputFormView;
  currentStateView: CurrentStateView;
  racingResultView: RacingResultView;
}

export default class Controller {
  inputFormView: InputFormView;
  currentStateView: CurrentStateView;
  racingResultView: RacingResultView;

  constructor({
    inputFormView,
    currentStateView,
    racingResultView,
  }: Constructors) {
    this.inputFormView = inputFormView;
    this.currentStateView = currentStateView;
    this.racingResultView = racingResultView;
  }

  initialize() {
    this.renderInitialView();
    this.subscribeViewEvents();
  }

  subscribeViewEvents() {}

  renderInitialView() {
    this.currentStateView.hide();
    this.racingResultView.hide();
  }
}
