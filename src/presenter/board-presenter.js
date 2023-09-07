import { render } from '../framework/render.js';
import SortView from '../view/sort.js';
import WaypointPresenter from './waypoint-presenter.js';


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

    // for (let i = 0; i < this.#points.length; i++) {
    //   this.#renderPoint(this.#points[i]);
    // }
    this.#renderPoints(this.#points);
  }

  #renderPoint(point) {
    const waypointPresenter = new WaypointPresenter({
      waypoinListContainer : this.#container
    });

    waypointPresenter.init(point);
  }

  #renderPoints(points) {
    points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  // const escKeyDownHandler = (evt) => {
  //   if (evt.key === 'Escape') {
  //     evt.preventDefault();
  //     replaceFormToTrip();
  //     document.removeEventListener('keydown',escKeyDownHandler);
  //   }
  // };

  // const pointComponent = new WaypointView ({
  //   point,
  //   onEditClick: () => {
  //     replaceTripToForm();
  //     document.addEventListener('keydown',escKeyDownHandler);
  //   },
  // });

  // const eventFormComponent = new WaypointEditFormView({
  //   point,
  //   onSubmit: () => {
  //     replaceFormToTrip();
  //     document.addEventListener('keydown',escKeyDownHandler);
  //   },
  //   onRollUpButtonClick: () => {
  //     replaceFormToTrip();
  //     document.removeEventListener('keydown', escKeyDownHandler);
  //   }
  // });

  // render(pointComponent,this.#container);

  // function replaceTripToForm () {
  //   replace(eventFormComponent, pointComponent);
  // }

  // function replaceFormToTrip () {
  //   replace(pointComponent, eventFormComponent);
  // }


}
