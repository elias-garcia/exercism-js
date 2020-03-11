//
// Darts
//

function squareValue(value) {
  return Math.pow(value, 2)
}

function computeScore(distanceToOrigin) {
  if (distanceToOrigin <= 1) {
    return 10;
  }

  if (distanceToOrigin <= 5) {
    return 5;
  }

  if (distanceToOrigin <= 10) {
    return 1;
  }

  return 0;
}

export const score = (x, y) => {
  const xSquared = squareValue(Math.abs(x));
  const ySquared = squareValue(Math.abs(y));
  const distanceToOrigin = Math.sqrt(xSquared + ySquared);

  return computeScore(distanceToOrigin);
};
