import HeaderInfoView from '../view/header-info';
import { render, RenderPosition } from '../render';

export default class HeaderInfoPresenter {
  constructor ({headContainer}) {
    this.headContainer = headContainer;
  }

  init () {
    render (new HeaderInfoView, this.headContainer, RenderPosition.AFTERBEGIN);
  }
}

