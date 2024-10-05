export default function appendToEachArrayValue(array, appendString) {
  const newArray1 = [];
  for (const value of array) {
    newArray1.push(appendString + value);
  }

  return newArray1;
}
