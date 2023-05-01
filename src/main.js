import BoarderPresenter from '../src/presenter/board-presenter';
import HeaderPreseter from '../src/presenter/header-presener';

const mainElement = document.querySelector('.page-body');
const mainInfoElement = mainElement.querySelector('.trip-main');
const eventsElement = mainElement.querySelector('.trip-events');

const headerPresenter = new HeaderPreseter ({headContainer: mainInfoElement});
const boardPresenter = new BoarderPresenter ({boardContainer: eventsElement});


headerPresenter.init();
boardPresenter.init();

