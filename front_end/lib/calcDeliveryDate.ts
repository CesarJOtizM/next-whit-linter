import moment from 'moment-business-days';

export const calcDeliveryDate = (hoy = new Date(), dias = 1) => {
  const { updateLocale } = moment;
  updateLocale('co', {
    holidayFormat: 'YYYY-MM-DD',
    workingWeekdays: [1, 2, 3, 4, 5],
  });

  const countDays: any = moment(hoy, 'DD-MM-YYYY').businessAdd(dias);

  return countDays._d;
};
