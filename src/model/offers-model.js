export default class OffersModel {
  constructor(service) {
    this.service = service;
    this.destinations = this.service.getOffers();
  }

  get() {
    return this.offers;
  }

  getById(type) {
    return this.offers.find((offer) => offer.type === type).offers;
  }
}
