
export function getProductCountFromCart(cart, name) {

  return getInt(cart[name]);
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
