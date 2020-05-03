function lrSegmentNumber(l, r) {
  let segment = '';
  for (let i = l; i <= r; i ++) {
    segment += i;
  }
  return Number(segment);
}