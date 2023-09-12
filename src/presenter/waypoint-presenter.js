import { remove, render, replace } from '../framework/render.js';
import WaypointEditFormView from '../view/waypoint-edit-form.js';
import WaypointView from '../view/waypoint.js';

export default class WaypointPresenter {
  #waypoinListContainer = null;

  #point = null;

  #handleDataChange = null;
  #waypointComponent = null;
  #waypointEditComponent = null;

  constructor({waypoinListContainer, onDataChange}){
    this.#waypoinListContainer = waypoinListContainer;
    this.#handleDataChange = onDataChange;
  }

  init(point) {
    this.#point = point;

    const prevWaypointComponent = this.#waypointComponent;
    const prevWaypiontEditComponent = this.#waypointEditComponent;

    this.#waypointComponent = new WaypointView ({
      point: this.#point,
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#waypointEditComponent = new WaypointEditFormView({
      point: this.#point,
      onSubmit: this.#handleFormSubmit,
      onRollUpButtonClick: this.#handleRollUpButtonClick
    });

    if (prevWaypointComponent === null || prevWaypiontEditComponent === null) {
      render(this.#waypointComponent, this.#waypoinListContainer);
      return;
    }

    if (this.#waypoinListContainer.contains(prevWaypointComponent)){
      replace(this.#waypointComponent, prevWaypointComponent);
    }

    if (this.#waypoinListContainer.contains(prevWaypiontEditComponent)){
      replace(this.#waypointComponent, prevWaypiontEditComponent);
    }
    remove(prevWaypointComponent);
    remove(prevWaypiontEditComponent);
  }

  destroy() {
    remove(this.#waypointComponent);
    remove(this.#waypointEditComponent);
  }

  #replaceTripToForm () {
    replace(this.#waypointEditComponent, this.#waypointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceFormToTrip () {
    replace(this.#waypointComponent, this.#waypointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToTrip();
    }
  };

  #handleRollUpButtonClick = () => {
    this.#replaceFormToTrip();
  };

  #handleEditClick = () => {
    this.#replaceTripToForm();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToTrip();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
