const priceMap = {
  'Apple': 0.25,
  'Orange': 0.30,
  'Banana': 0.15,
  'Papaya': 0.50,
};

const discountMap = {};

export function createSummaryFromCart(cart) {
  const summary = {
    items: [],
    totalPrice: 0.0,
  };

  Object.keys(cart).forEach((product) => {
    const price = priceMap[product];
    const count = cart[product];
    const subPrice = price * count;
    if (product === 'Papaya') {

      return;
    }
    summary.items.push({
      product,
      count: cart[product],
      price: priceMap[product],
      subPrice,
    });

    summary.totalPrice += subPrice;
  });
  return summary;
}

export function getProductCountFromCart(cart, name) {
  return getInt(cart[name]);
}

export function getAllProductsCountFromCart(cart) {
  let sum = 0;
  Object.keys(cart).forEach((key) => {
    sum += getInt(cart[key]);
  });
  return sum;
}

export function getInt(value) {
  return typeof(value) === 'number' ? value : 0;
}

export function incrementInt(number) {
  return getInt(number) ? number+1 : 1;
}

export function decrementInt(number) {
  return getInt(number) > 0 ? number-1 : 0;
}
