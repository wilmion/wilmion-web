export function chunkArray<T>(myArray: Array<T>, chunk_size: number) {
  var index = 0;
  var arrayLength = myArray.length;
  var tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    const myChunk = myArray.slice(index, index + chunk_size);
    // Haz algo si quieres con el grupo
    tempArray.push(myChunk);
  }

  return tempArray;
}
