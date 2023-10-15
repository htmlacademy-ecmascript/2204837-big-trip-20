import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(duration);
dayjs.extend(relativeTime);

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MSEC_IN_SEC * SEC_IN_MIN * MIN_IN_HOUR;
const MSEC_IN_DAY = MSEC_IN_HOUR * HOUR_IN_DAY;

function getRandomInteger (a = 0, b = 1) {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function getRandomValue (items) {
  return items[getRandomInteger(0, items.length - 1)];
}

function formatStringToDateTime(date) {
  return dayjs(date).format('YYYY-MM-DDTHH:mm');
}

function formatStringToShortTime(date) {
  return dayjs(date).format('MMM DD');
}

function formatStringToTime(date) {
  return dayjs(date).format('HH:mm');
}

function dateDiff (date1, date2){
  let answer = '';
  const dateDifferent = date1.diff(date2, 'm');
  const dateDay = Math.floor(dateDifferent / 1440);
  const answerH = dateDifferent - dateDay * 1440;
  const dateHour = Math.floor(answerH / 60);
  const dateMinute = answerH - dateHour * 60;
  if (dateDay !== 0) {
    answer = `${dateDay}d `;
  }
  if (dateHour !== 0) {
    answer += `${dateHour}h ` ;
  }
  if (dateMinute !== 0) {
    answer += `${dateMinute}m` ;
  }
  return answer;
}

function updateItem(items, update) {
  return items.map((item) => item.id === update.id ? update : item);
}

function getDateDifference (pointA, pointB) {
  return dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
}

function getTimeDifference (pointA, pointB) {
  const pointAdifference = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const pointBdifference = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));

  return pointBdifference - pointAdifference;
}

export {updateItem, formatStringToTime, formatStringToShortTime, formatStringToDateTime, getRandomValue, dateDiff, getRandomInteger, MSEC_IN_DAY, MSEC_IN_HOUR, getDateDifference, getTimeDifference};

