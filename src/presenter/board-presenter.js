import { render, RenderPosition } from '../render.js';
import SortView from '../view/sort.js';
import FormEditView from '../view/waypoint-edit-form.js';
import WaypointView from '../view/waypoint.js';
// import { generatePoint } from '../mock/point.js';
// import { getRandomInteger, getRandomValue } from '../utils.js';
// import { DESTINATION_COUNT, TYPES } from '../const.js';
// import { destinationsList } from '../mock/destination.js';
// import { listOffers } from '../mock/offer.js';

export default class BoarderPresenter {

  constructor ({boardContainer, points}) {
    this.boardContainer = boardContainer;
    this.points = points;
  }

  init () {
    render(new SortView, this.boardContainer, RenderPosition.BEFOREEND);
    render(new FormEditView, this.boardContainer, RenderPosition.BEFOREEND);

    for (let i = 0; i < this.points.length; i++) {

      // const offerIndex = getRandomInteger(0, listOffers.length - 1);
      // const offer = listOffers[offerIndex];

      // const offersIds = Array.from({length:offer.offers.length}, (_, index) => offer.offers[index].id);
      // generatePoint(TYPES[offerIndex], destinationsList[getRandomInteger(0,DESTINATION_COUNT - 1)].id,offersIds)

      render (new WaypointView(this.points[i]), this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}
