import { getRandomInteger } from '../utils';
import { Price } from './const';
import { TYPES , OFFER_COUNT} from '../const';

function generateOffer(type) {
  return {
    id : crypto.randomUUID(),
    title : `Offer ${type}`,
    price : getRandomInteger(Price.MIN, (Price.MAX / 10))
  };
}

function generateOffers() {
  return TYPES.map((type) => ({
    type,
    offers : Array.from({length:6}, () => generateOffer(type))
  }));
}

const listOffers = generateOffers();

export {listOffers};
