import { CITIES, DESCRIPTION} from './const';

function generateDestination (city) {


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

const destinationsList = CITIES.map((city) => generateDestination(city));

export {generateDestination, destinationsList};
