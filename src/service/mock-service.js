import { generateDestination } from '../mock/destination';
import { generateOffer } from '../mock/offer';
import { generatePoint } from '../mock/point';

import { getRandomInteger, getRandomValue } from '../utils';
import { DESTINATION_COUNT, OFFER_COUNT, POINT_COUNT, TYPES} from '../const';

export default class MockService {
  destinations = [];
  points = [];
  offers = [];

  constructor() {
    this.destinations = generateDestinations();
    this.points = generatePoints();
    this.offers = generateOffers();
  }

  getDestinations() {
    return this.destinations;
  }

  getPoints() {
    return this.points;
  }

  getOffers() {
    return this.offers;
  }

  generateDestinations() {
    return Array.from({length:DESTINATION_COUNT}, () => generateDestination());
  }

  generateOffers() {
    return TYPES.map((type) => ({
      type,
      offers : Array.from({length:getRandomInteger(0,OFFER_COUNT)}, () => generateOffer(type))
    }));
  }

  generatePoints() {
    return Array.from({length:POINT_COUNT}, () => {
      const type = getRandomValue(TYPES);
      const description = getRandomValue(this.destinations);

      const hasOffers = getRandomInteger(0,1);

      const offersByType = this.offers.find((offerByType) => offerByType.type === type);

      const offerIds = (hasOffers) ? offersByType.offers.slice(0,getRandomInteger(0,OFFER_COUNT)).map((offer) => offer.id) : [];

      return generatePoint(type, description.id, offerIds);
    });
  }
}
