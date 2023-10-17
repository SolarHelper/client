// здесь храним функции\константы

export const formatMoney = ({ value, type = "₽" }) => {
  function separateValue(val) {
    return val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  if (Array.isArray(value)) {
    value = value.map((val) => separateValue(val));
    return value[0] + " " + type + " – " + value[1] + " " + type;
  }
  return separateValue(value) + " " + type;
};

export const getFormattedCountString = (count) => {
  if (count === 1) {
    return count + " товар";
  } else if (count >= 2 && count <= 4) {
    return count + " товара";
  } else {
    return count + " товаров";
  }
};
