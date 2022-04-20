import { Stat } from '@models/stat.model';

const daysVerbs = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thrusday',
  'Friday',
  'Saturday',
];

const month = [
  'Juan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Agoust',
  'September',
  'October',
  'November',
  'December',
];

function getDifferenceOfDays(from: Date, to: Date) {
  const dates: Date[] = [to];
  let limit: boolean = false;

  while (!limit) {
    let compareDate = new Date(dates[dates.length - 1]);

    compareDate.setDate(compareDate.getUTCDate() - 1);

    if (compareDate.getTime() >= from.getTime()) {
      dates.push(compareDate);
    } else limit = true;
  }

  return dates;
}

function agroupingByDateRange(
  from: Date,
  to: Date,
  type: 'days' | 'weeks' | 'months' | 'years'
) {
  const days = getDifferenceOfDays(from, to);

  const cycles: Date[][] = [[]];

  days.forEach((day, index) => {
    let condition = false;

    const oldIndex = index - 1 === -1 ? 0 : index - 1;

    switch (type) {
      case 'months':
        const month = day.getUTCMonth();

        const monthLast = days[oldIndex].getUTCMonth();

        condition = month !== monthLast;
        break;
      case 'weeks':
        const dayNumber = day.getUTCDay();

        condition = dayNumber === 0;
        break;
      case 'years':
        const year = day.getUTCFullYear();

        const lastYear = days[oldIndex].getUTCFullYear();

        condition = year !== lastYear;
        break;

      default:
        condition = false;
        break;
    }

    if (condition) {
      cycles.push([day]);
    } else {
      cycles[cycles.length - 1].push(day);
    }
  });

  return cycles;
}

export function separateData(
  from: Date,
  to: Date,
  stats: Stat[],
  type: 'days' | 'weeks' | 'months' | 'years'
) {
  const agrupingData: { day: string; items: Stat[] }[] = [];

  if (type === 'days') {
    const days = getDifferenceOfDays(from, to);

    days.forEach((day) => {
      const items = stats.filter((stat) => {
        const createdAt = new Date(stat.createdAt);

        const isDate = createdAt.getUTCDate() === day.getUTCDate();
        const isMonth = createdAt.getUTCMonth() === day.getUTCMonth();
        const isYear = createdAt.getUTCFullYear() === day.getUTCFullYear();

        return isDate && isMonth && isYear;
      });

      const verbDay = daysVerbs[day.getDay()];

      agrupingData.push({
        day: `${verbDay} ${day.getDate()}`,
        items,
      });
    });
  } else {
    const dateRange = agroupingByDateRange(from, to, type);

    dateRange.forEach((range) => {
      const fromRange = range[range.length - 1];
      const toRange = range[0];

      const items = stats.filter((stat) => {
        const createdAt = new Date(stat.createdAt);

        const isGreater = createdAt.getTime() >= fromRange.getTime();
        const isLess = createdAt.getTime() <= toRange.getTime();

        return isGreater && isLess;
      });

      let text = '';

      if (type === 'weeks') {
        text = `Week ${fromRange.getDate()} - ${toRange.getDate()}`;
      } else if (type === 'months') {
        text = month[fromRange.getMonth()];
      } else {
        text = `${fromRange.getFullYear()}`;
      }

      agrupingData.push({
        day: text,
        items,
      });
    });
  }

  return agrupingData;
}
