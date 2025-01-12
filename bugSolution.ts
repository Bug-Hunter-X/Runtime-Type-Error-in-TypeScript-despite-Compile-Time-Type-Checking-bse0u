function combineArrays(arr1: number[], arr2: number[]): number[] {
  // Validate arr2 before combining
  if (!arr2.every(Number.isFinite)) {
    throw new Error('arr2 must only contain numbers.');
  }
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, '6'];

try {
  const combined = combineArrays(arr1, arr2); // Throws an error
  console.log(combined);
} catch (error) {
  console.error(error.message);
}

const arr3 = [1,2,3];
const arr4 = [4,5,6];
const combined2 = combineArrays(arr3, arr4);
console.log(combined2) //This will successfully run