/* -------- LOOP SOLUTION -------- */
function sleddingHillsLoop(enjoyability, maxRuns) {
  return [...Array(maxRuns)].reduce(run => {
    const hill = enjoyability.sort((a, b) => b -a)[0];
    enjoyability[0] = (hill > 0) ? hill - 1 : 0;
    return run + hill;
  }, 0);
}

/* -------- RECURSION SOLUTION -------- */
function sleddingHillsRecursion(enjoyability, maxRuns, total = 0) {
  if (maxRuns > 0 && enjoyability.length > 0) {
    const max = Math.max(...enjoyability);
    const index = enjoyability.indexOf(max);
    if (max > 0) {
      total += max;
      enjoyability[index] -= 1;
      maxRuns -= 1;
    } else {
      enjoyability.splice(index);
    }
    total = sleddingHillsRecursion(enjoyability, maxRuns, total);
  }
  return total;
}