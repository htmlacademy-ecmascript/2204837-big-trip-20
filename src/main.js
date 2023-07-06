import BoarderPresenter from '../src/presenter/board-presenter';
import HeaderInfoPresenter from './presenter/header-info-presener';
import HeaderFilterPreseter from './presenter/header-filter-presener';
import {pointsList} from './mock/point';

const mainElement = document.querySelector('.page-body');
const mainInfoElement = mainElement.querySelector('.trip-main');
const tripControlsElement = mainElement.querySelector('.trip-controls__filters');
const eventsElement = mainElement.querySelector('.trip-events');

const headerInfoPresenter = new HeaderInfoPresenter ({headContainer: mainInfoElement});
const headerFilterPresenter = new HeaderFilterPreseter ({headContainer: tripControlsElement});

const boardPresenter = new BoarderPresenter ({boardContainer: eventsElement, points: pointsList});


headerInfoPresenter.init();
headerFilterPresenter.init();
boardPresenter.init();

