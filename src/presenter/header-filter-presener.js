import FilterView from '../view/filter-view';
import { render, replace } from '../framework/render.js';

export default class HeaderFilterPreseter {
  #headContainer;

  constructor ({headContainer}) {
    this.#headContainer = headContainer;
  }

  init () {
    render (new FilterView, this.#headContainer);
  }
}
