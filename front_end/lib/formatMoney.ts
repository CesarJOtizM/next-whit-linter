import numeral from 'numeral';

export const formatMoney = (amount: number) => {
  return numeral(amount).format('$ 0.00');
};
