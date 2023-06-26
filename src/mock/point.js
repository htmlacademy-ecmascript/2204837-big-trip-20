import { getRandomInteger, getRandomValue } from '../utils';
import { Price } from './const';
import { getDate } from './utils';
import { POINT_COUNT, TYPES , OFFER_COUNT} from '../const';
import { listOffers } from './offer';
import { destinationsList } from './destination';


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

// function ggeneratePoint () {
//   return {
//     id : crypto.randomUUID(),
//     basePrice : getRandomInteger(Price.MIN, Price.MAX),
//     dateFrom : getDate({next : false}),
//     dateTo : getDate({next : true}),
//     destination : destinationId,
//     isFavorite : !!getRandomInteger(0,1),
//     offers : offersIds,
//     type
//   };
// }

function generatePoints() {
  return Array.from({length:POINT_COUNT}, () => {
    const type = getRandomValue(TYPES);
    const description = getRandomValue(destinationsList);

    const hasOffers = getRandomInteger(0,1);

    const offersByType = listOffers.find((offerByType) => offerByType.type === type);

    const offerIds = (hasOffers) ? offersByType.offers.slice(0,getRandomInteger(0,OFFER_COUNT)).map((offer) => offer.id) : [];

    return generatePoint(type, description.id, offerIds);
  });
}

const pointsList = generatePoints();
//console.log('pointsList:', pointsList);

export {generatePoint, pointsList};
