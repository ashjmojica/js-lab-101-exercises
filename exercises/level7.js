// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number. If the input is anything other than a positive
// integer return an empty array
//
// Name the function "finalFunction"

function finalFunction(num) {
  let array = [];
  if (typeof num !== "number") {
    return array;
  }
  for (i = 0; i < num; i++) {
    array.push(num);
  }
  return array;
}
