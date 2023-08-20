import { render, replace } from '../framework/render.js';
import SortView from '../view/sort.js';
import WaypointEditFormView from '../view/waypoint-edit-form.js';
import WaypointView from '../view/waypoint.js';

export default class BoarderPresenter {
  #container = null;
  #sortComponent = new SortView;
  #points;

  constructor ({boardContainer, points}) {
    this.#container = boardContainer;
    this.#points = points;
  }

  init () {
    render(this.#sortComponent, this.#container);

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoints(this.#points[i]);
    }
  }

  #renderPoints(point) {

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToTrip();
        document.removeEventListener('keydown',escKeyDownHandler);
      }
    }
  
    const pointComponent = new WaypointView ({
      point,
      onEditClick: () => {
        replaceTripToForm();
        document.addEventListener('keydown',escKeyDownHandler);
      },
    });

    const eventFormComponent = new WaypointEditFormView({
      point,
      onEditClick: () => {
        replaceFormToTrip();
        document.addEventListener('keydown',escKeyDownHandler);
      },
      onRollUpButtonClick: () => {
        replaceFormToTrip();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });
    
    render(pointComponent,this.#container);

    function replaceTripToForm () {
    replace(eventFormComponent, pointComponent);
    }
  
    function replaceFormToTrip () {
    replace(pointComponent, eventFormComponent);
    }
  }

}


