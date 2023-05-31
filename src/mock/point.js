import { getRandomInteger } from '../utils';
import { Price } from './const';
import { getDate } from './utils';

function generatePoint (type, destinationId, offersIds) {
  return {
    id : crypto.randomUUID(),
    basePrice : getRandomInteger(Price.MIN, Price.MAX),
    dateFrom : getDate({next : false}),
    dateTo : getDate({next : true}),
    destination : destinationId,
    isFavorite : !!getRandomInteger(0,1),
    offers : offersIds,
    type
  };
}

export {generatePoint};
