import { getRandomInteger } from '../utils';
import { Price } from './const';
import { TYPES , OFFER_COUNT} from '../const';

function generateOffer(type, index) {
  return {
    id : crypto.randomUUID(),
    title : `Offer ${type} ${index}`,
    price : getRandomInteger(Price.MIN, (Price.MAX / 10))
  };
}

function generateOffers() {
  return TYPES.map((type) => ({
    type,
    offers : Array.from({length:OFFER_COUNT}, (_, index) => generateOffer(type, index))
  }));
}

const listOffers = generateOffers();

export {listOffers};
