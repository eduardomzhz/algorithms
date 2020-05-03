function pinPadDiscovery(logins) {
  let counter = [{}, {}, {}, {}];
  logins.forEach(input => {
    input.forEach((pair, index) => {
      [...pair].forEach(value => {
        counter[index][value] = counter[index][value] 
          ? counter[index][value] + 1 
          : 1;
      });
    });
  });
  const pin = counter.map(input => {
    let max = null;
    let key = null;
    let repeated = false;
    for (value in input) {
      if (max) {
        if (input[value] > max) {
          repeated = false;
          max = input[value];
          key = value;
        } else if (input[value] === max) {
          repeated = true;
        }
      } else {
        max = input[value];
        key = value;
      }
    }
    return repeated ? '?' : key;
  });
  return pin.join('');
}