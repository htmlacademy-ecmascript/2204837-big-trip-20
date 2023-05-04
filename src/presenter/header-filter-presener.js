import FilterView from '../view/filter-view';
import { render, RenderPosition } from '../render';

export default class HeaderFilterPreseter {
  constructor ({headContainer}) {
    this.headContainer = headContainer;
  }

  init () {
    render (new FilterView, this.headContainer, RenderPosition.BEFOREEND);
  }
}
