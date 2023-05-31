import { getRandomInteger } from '../utils';
import { Price } from './const';

function generateOffer(type) {
  return {
    id : crypto.randomUUID(),
    tittle : `Offer ${type}`,
    price : getRandomInteger(Price.MIN, (Price.MAX / 10))
  };
}

export {generateOffer};
