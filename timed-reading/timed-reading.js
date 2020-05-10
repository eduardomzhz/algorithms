function timedReading(maxLength, text) {
  return text.replace(/["'?!.,:;]/g, '')
    .split(' ')
    .reduce((sum, word) => word.length <= maxLength && !!word ? sum + 1 : sum, 0);
}