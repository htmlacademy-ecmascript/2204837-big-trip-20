import HeaderInfoView from '../view/header-info';
import FilterView from '../view/filter-view';
import { render, RenderPosition } from '../render';

export default class HeaderPresenter {
  constructor ({headContainer}) {
    this.headContainer = headContainer;
  }

  init () {
    render (new HeaderInfoView, this.headContainer, RenderPosition.AFTERBEGIN);
    render (new FilterView, this.headContainer);
  }
}
