import HeaderInfoView from '../view/header-info';
import { render, replace , RenderPosition} from '../framework/render.js';

export default class HeaderInfoPresenter {
  #headContainer;

  constructor ({headContainer}) {
    this.#headContainer = headContainer;
  }

  init () {
    render (new HeaderInfoView, this.#headContainer, RenderPosition.AFTERBEGIN);
  }
}

