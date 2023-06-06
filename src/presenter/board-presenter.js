import { render, RenderPosition } from '../render.js';
import SortView from '../view/sort.js';
import FormEditView from '../view/waypoint-edit-form.js';
import WaypointView from '../view/waypoint.js';
import { generatePoint } from '../mock/point.js';
import { getRandomInteger, getRandomValue } from '../utils.js';
import { DESTINATION_COUNT, TYPES } from '../const.js';
import { destinationsList } from '../mock/destination.js';
import { listOffers } from '../mock/offer.js';

export default class BoarderPresenter {

  constructor ({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init () {
    render(new SortView, this.boardContainer, RenderPosition.BEFOREEND);
    render(new FormEditView, this.boardContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < 3; i++) {
      render (new WaypointView(generatePoint(getRandomValue(TYPES),destinationsList.id,listOffers[getRandomInteger(0,6).id])), this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}
