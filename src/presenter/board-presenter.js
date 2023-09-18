import { render } from '../framework/render.js';
import { updateItem } from '../utils.js';
import SortView from '../view/sort.js';
import WaypointPresenter from './waypoint-presenter.js';


export default class BoarderPresenter {
  #container = null;
  #sortComponent = new SortView;

  #points;
  #boardWaypoints = [];

  #waypointPresenters = new Map();

  constructor ({boardContainer, points}) {
    this.#container = boardContainer;
    this.#points = points;
  }

  init () {
    render(this.#sortComponent, this.#container);
    this.#boardWaypoints = [...this.#points];


    this.#renderPoints(this.#points);
  }

  #renderPoint(point) {
    const waypointPresenter = new WaypointPresenter({
      waypoinListContainer: this.#container,
      onDataChange: this.#handleWaypointChange,
      onModeChange: this.#handleModeChange,
    });

    waypointPresenter.init(point);
    this.#waypointPresenters.set(point.id, waypointPresenter);
  }

  #handleModeChange = () => {
    this.#waypointPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderPoints(points) {
    points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #handleWaypointChange = (updatedWaypoint) => {
    this.#boardWaypoints = updateItem(this.#boardWaypoints, updatedWaypoint);
    this.#waypointPresenters.get(updatedWaypoint.id).init(updatedWaypoint);
  };

  #clearWaypointList(){
    this.#waypointPresenters.forEach((presenter) => presenter.destroy());
    this.#waypointPresenters.clear();
  }

}
