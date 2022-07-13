import moment from 'moment';

const MoneySplitbyDot = money => {
  let number = money;
  let str = number.toString();
  let result = str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return result;
};

const MakeStripInString = transaction_id => {
  let number = transaction_id;
  let str = number.toString();
  let result = str.replace(/\d{4}(?=.)/g, '$&-');
  return result;
};

const ConvertTime = time => {
  return moment(time).format('DD MMMM YYYY');
};

const SliceDecimal = number => {
  return number.slice(0, -3);
};

function ChangeTypeOfQuantity(qty, type) {
  if (type === '1') {
    return qty + ' Kg';
  } else {
    return SliceDecimal(qty) + ' Pcs';
  }
}

export {
  MoneySplitbyDot,
  MakeStripInString,
  ConvertTime,
  SliceDecimal,
  ChangeTypeOfQuantity,
};
