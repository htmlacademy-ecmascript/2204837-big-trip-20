import { createElement } from '../render.js';
import { destinationsList } from '../mock/destination.js';
import { listOffers } from '../mock/offer.js';
import { pointsList } from '../mock/point.js';

function createOffersListTemplate(wayPoint) {
  const offersTemplates = [];
  const offersByType = listOffers.find((item) => item.type === wayPoint.type);
  for (let i = 0; i < offersByType.offers.length; i++) {
    const currentOffer = offersByType.offers[i];
    const check = !! wayPoint.offers.find((item) => item === currentOffer.id);
    let checked = '';
    if (check) {
      checked = 'checked';
    } else {
      checked = '';
    }
    // check ? checked = 'checked' : checked ='';
    offersTemplates.push(`<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-mockid-${currentOffer.id}" type="checkbox" name="event-offer-mockid-${currentOffer.id}" ${checked}>
    <label class="event__offer-label" for="event-offer-mockid-${currentOffer.id}">
      <span class="event__offer-title">${currentOffer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${currentOffer.price}</span>
    </label>
  </div>`);
  }
  return offersTemplates.join('');
}

function getCurrentCity(wayPoint){
  return destinationsList.find((item) => item.id === wayPoint.destination).name;
}

function createFormEditTemplate(point) {

  function getCityListTamplate () {
    const cityTemplates = [];
    const citys = [];
    for (let i = 0; i < pointsList.length ; i++) {
      citys.push((destinationsList.find((item) => item.id === pointsList[i].destination)).name);
    }
    const uniqueCityArray = new Set(citys);
    for (const city of uniqueCityArray) {
      cityTemplates.push(`<option value="${city}">${city}</option>`);
    }
    return cityTemplates.join('');
  }

  function getEventPhotos(wayPoint) {
    const photosTemplates = [];
    const currentDest = destinationsList.find((item) => item.id === wayPoint.destination);
    for (let i = 0; i < currentDest.pictures.length; i++) {
      photosTemplates.push(`<img class="event__photo" src="${currentDest.pictures[i].src}" alt="Event photo"></img>`);
    }
    return photosTemplates;
  }

  function getEventDescription(wayPoint) {
    //const photosTemplates = [];
    //  const destinanionId = wayPoint.destination;
    const currentDest = destinationsList.find((item) => item.id === wayPoint.destination);
    //photosTemplates.push(`<img class="event__photo" src="${currentDest.pictures[0].src}" alt="Event photo"></img>`);
    return currentDest.description;
  }

  return `<form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          <div class="event__type-item">
            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
          </div>
          <div class="event__type-item">
            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
          </div>
        </fieldset>
      </div>
    </div>
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
      ${point.type}
      </label>
      <select class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${getCurrentCity(point)}" list="destination-list-1">
        ${getCityListTamplate(point)}
      </select>
    </div>
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${point.dateFrom.format('DD/MM/YY HH:mm')}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${point.dateTo.format('DD/MM/YY HH:mm')}">
    </div>
    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.basePrice}">
    </div>
    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${createOffersListTemplate(point)}
      </div>
    </section>
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${getEventDescription(point)}</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${getEventPhotos(point)}
        </div>
      </div>
    </section>
  </section>
</form>`;
}

export default class WaypointEditFormView {
  point = null;

  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    return createFormEditTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
