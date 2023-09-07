import { render, replace } from '../framework/render.js';
import WaypointEditFormView from '../view/waypoint-edit-form.js';
import WaypointView from '../view/waypoint.js';

export default class WaypointPresenter {
  #waypoinListContainer = null;

  #point = null;

  #waypointComponent = null;
  #waypointEditComponent = null;

  constructor(waypoinListContainer){
    this.#waypoinListContainer = waypoinListContainer;
  }

  init(point) {
    this.#point = point;

    this.#waypointComponent = new WaypointView ({
      point: this.#point,
      onEditClick: this.#handleEditClick
    });

    this.#waypointEditComponent = new WaypointEditFormView({
      point: this.#point,
      onSubmit: this.#handleFormSubmit,
      onRollUpButtonClick: this.#handleRollUpButtonClick
    });

    render(this.#waypointComponent,this.#waypoinListContainer);
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

  #handleFormSubmit = () => {
    this.#replaceFormToTrip();
  };
}
