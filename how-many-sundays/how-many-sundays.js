function howManySundays(n, startDay) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let index = days.indexOf(startDay);
  let count = 0;
  while (n--) {
    index = index < days.length - 1 ? index + 1 : 0;
    if (days[index] === 'Sunday') {
      count ++;
    }
  }
  return count;
}