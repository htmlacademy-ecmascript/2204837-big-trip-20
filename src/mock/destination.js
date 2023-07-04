import { DESTINATION_COUNT } from '../const';
import { getRandomValue } from '../utils';
import { CITIES, DESCRIPTION} from './const';

function generateDestination () {
  const city = getRandomValue(CITIES);

  return {
    id : crypto.randomUUID(),
    name: city,
    description : DESCRIPTION,
    pictures : [
      {
        'src' : `https://loremflickr.com/300/200/?random=${crypto.randomUUID()}`,
        'description' : `${city} description`
      },
      {
        'src' : `https://loremflickr.com/300/200/?random=${crypto.randomUUID()}`,
        'description' : `${city} description`
      },
      {
        'src' : `https://loremflickr.com/300/200/?random=${crypto.randomUUID()}`,
        'description' : `${city} description`
      },
      {
        'src' : `https://loremflickr.com/300/200/?random=${crypto.randomUUID()}`,
        'description' : `${city} description`
      },
      {
        'src' : `https://loremflickr.com/300/200/?random=${crypto.randomUUID()}`,
        'description' : `${city} description`
      },
    ]
  };
}

const destinationsList = Array.from({length:DESTINATION_COUNT}, () => generateDestination());

export {generateDestination, destinationsList};
