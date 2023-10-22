let arr = [2, 3, 4, 5];
// calculate the area for each radius

function calArea() {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(3.14 * arr[i] * arr[i]);
  }

  return result;
}

let finalAreaArray = calAreaArray(radiusArr);
