import { render } from '../framework/render.js';
import { updateItem } from '../utils.js';
import SortView from '../view/sort.js';
import WaypointPresenter from './waypoint-presenter.js';
import { SORT_TYPE } from '../const.js';
import { sorting } from '../sort.js';

export default class BoarderPresenter {
  #container = null;
  #sortComponent = null;

  #currentSortType = SORT_TYPE.DAY;

  #points;
  #boardWaypoints = [];

  #waypointPresenters = new Map();

  constructor ({boardContainer, points}) {
    this.#container = boardContainer;
    this.#points = points;
  }

  init () {
    this.#boardWaypoints = [...this.#points];

    sorting(this.#boardWaypoints,this.#currentSortType);
    this.#renderSort();
    this.#renderPoints(this.#points);
  }

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#sortComponent, this.#container);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortTrips(sortType);
    this.#clearWaypointList();
    this.#renderPoints(this.#boardWaypoints);
  };

  #sortTrips(sortType) {
    sorting(this.#boardWaypoints, sortType);
    this.#currentSortType = sortType;
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
