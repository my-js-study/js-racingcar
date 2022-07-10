import { $ } from '../../utils/dom';
import View from '../View';

export default class CurrentStateView extends View {
  constructor() {
    super($('#current-state'));
  }
}
