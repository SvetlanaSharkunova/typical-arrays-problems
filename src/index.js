
exports.min = function min (array) {
  if ((typeof array == "undefined") || (array.length === 0)) {
    return 0;
  }
  let minValue = array[0];
  for (let i=0; i < array.length; i++) {
      if (array[i+1] <= minValue) {
        minValue = array[i + 1];
      }
    }
  return minValue;
}

exports.max = function max (array) {
  if ((typeof array == "undefined") || (array.length === 0)) {
    return 0;
  }
  let maxValue = array[0];
  for (let i=0; i < array.length; i++) {
      if (array[i+1] >= maxValue) {
        maxValue = array[i + 1];
      }
    }
  return maxValue;
}

exports.avg = function avg (array) {
  if ((typeof array == "undefined") || (array.length === 0)) {
    return 0;
  }
  let avgValue = 0;
  for (let i=0; i < array.length; i++) {
    avgValue += array[i];
  }
  return avgValue/array.length;
}
