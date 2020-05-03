function whereToGather(travelCosts) {
  let cost = -1;
  travelCosts.forEach((row, i) => {
    const rowLength = row.length;
    let sum = 0;
    let viable = true;
    let x = null;
    for (let j = 0; j < rowLength; j ++) {
      x = travelCosts[j][i];
      if (x < 0) {
        viable = false;
        continue;
      } else {
        sum += x;
      }
    }
    if (viable && (sum < cost || cost < 0)) {
      cost = sum;   
    }
  });
  return cost;
}