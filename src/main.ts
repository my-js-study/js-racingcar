import Controller from './Controller.js';
import CurrentStateView from './Views/CurrentState/index.js';
import InputFormView from './Views/InputForm/index.js';
import RacingResultView from './Views/RacingResult/index.js';

const racingCarController = new Controller({
  inputFormView: new InputFormView(),
  currentStateView: new CurrentStateView(),
  racingResultView: new RacingResultView(),
});

racingCarController.initialize();
