import { render, RenderPosition } from '../render.js';
import SortView from '../view/sort.js';
import FormEditView from '../view/form-edit.js';
import WaypointView from '../view/waypoint.js';

export default class BoarderPresenter {

  constructor ({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init () {
    render(new SortView, this.boardContainer, RenderPosition.BEFOREEND);
    render(new FormEditView, this.boardContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < 3; i++) {
      render (new WaypointView, this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}
