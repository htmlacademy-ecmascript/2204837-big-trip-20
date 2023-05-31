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
        'src' : `https://loremflicker.com/300/200/?random=${crypto.randomUUID()}`,
        'description' : `${city} description`
      }
    ]
  };
}

export {generateDestination};
