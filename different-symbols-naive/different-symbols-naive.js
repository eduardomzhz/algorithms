function differentSymbolsNaive(string) {
  return string.split('')
    .filter((element, index, array) => array.indexOf(element) === index)
    .length;
} 