import { render, RenderPosition } from '../render.js';
import SortView from '../view/sort.js';
import WaypointEditFormView from '../view/waypoint-edit-form.js';
import WaypointView from '../view/waypoint.js';

export default class BoarderPresenter {

  constructor ({boardContainer, points}) {
    this.boardContainer = boardContainer;
    this.points = points;
  }

  init () {
    render(new SortView, this.boardContainer, RenderPosition.BEFOREEND);
    render(new WaypointEditFormView(this.points[0]), this.boardContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < this.points.length; i++) {
      render (new WaypointView(this.points[i]), this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}
