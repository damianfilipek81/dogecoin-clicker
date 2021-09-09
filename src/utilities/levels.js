export const levelsCalc = (points) => {
  if (points >= 10) {
    let calc = -(((points - 10) / 10) * -1 - 1);
    return parseInt(Math.log2(calc), 10) + 2;
  } else {
    return 1;
  }
};
