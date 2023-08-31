import { listOffers } from '../mock/offer.js';
import { destinationsList } from '../mock/destination.js';
import { dateDiff } from '../utils.js';
import AbstractView from '../framework/view/abstract-view.js';

function createWaypointTemplate(point) {

  function createOffersTemplate(wayPoint) {
    const offersTemplates = [];
    for (let i = 0; i < wayPoint.offers.length; i++) {
      const offerId = wayPoint.offers[i];
      const offer = listOffers.find((item) => item.type === wayPoint.type);
      const currentOffer = offer.offers.find((item) => item.id === offerId);
      offersTemplates.push(`<li class="event__offer">
      <span class="event__offer-title">${currentOffer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${currentOffer.price}</span>
    </li>`);
    }
    return offersTemplates.join('');
  }

  function getCity (wayPoint) {
    const destinationId = wayPoint.destination;
    const currentDestination = destinationsList.find((item) => item.id === destinationId);
    return currentDestination;
  }

  function checkFavorit(wayPoint) {
    return wayPoint.isFavorite ? '--active' : '';
  }

  return `<ul class="trip-events__list">
  <li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${point.dateFrom.format('YYYY-MM-DD')}">${point.dateFrom.format('MMM DD')}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${point.type} ${getCity(point).name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${point.dateFrom.format('YYYY-MM-DDTHH:mm')}">${point.dateFrom.format('HH:mm')}</time>
        &mdash;
        <time class="event__end-time" datetime="${point.dateTo.format('YYYY-MM-DDTHH:mm')}}">${point.dateTo.format('HH:mm')}</time>
      </p>
      <p class="event__duration">${dateDiff(point.dateTo,point.dateFrom)} (${point.dateTo.diff(point.dateFrom,'minute')} minute)</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${point.basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${createOffersTemplate(point)}
    </ul>
    <button class="event__favorite-btn event__favorite-btn${checkFavorit(point)}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
</ul>`;
}

export default class WaypointView extends AbstractView {
  #point = null;
  #editClick;

  constructor({point,onEditClick}) {
    super();
    this.#point = point;

    this.#editClick = onEditClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click',this.#editClickHandler);
  }

  get template() {
    return createWaypointTemplate(this.#point);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#editClick();
  };

}
