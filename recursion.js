// Fibonacci iteration
function fibs(num) {
  let arr = [];
  
  if (num === 0) return arr;
  arr.push(0);
  
  if (num === 1) return arr;
  arr.push(1);

  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  
  return arr;
  }
  
  // console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
  
  // Fiboancci recursion
  function fibsRec(num) {
    return num < 2 ? num : [].shift(fibsRec(num - 1) + fibsRec(num - 2));
  }
  
  // console.log(fibs(4)); // [0, 1, 1, 2]
  
  // Merge Sort Algorithm
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    } else {
      let mid = Math.floor((arr.length / 2));
      let firstHalf = arr.slice(0, mid);
      let secondHalf = arr.slice(mid, arr.length);
      return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    }
  }
  
  // Merge Algorithm
  function merge(arr1, arr2) {
    let result = [];
    let arr1Index = 0;
    let arr2Index = 0;
    let resultIndex = 0;
  
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      result[resultIndex++] = arr1[arr1Index++]; 
    } else {
      result[resultIndex++] = arr2[arr2Index++]; 
    }
  }
  
  for ( ; arr1Index < arr1.length; arr1Index++) {
    result[resultIndex++] = arr1[arr1Index]; 
  }
  
  for ( ; arr2Index < arr2.length; arr2Index++) {
    result[resultIndex++] = arr2[arr2Index]; 
  }
  
    return result;
  }
  
  let arr = [35, 21, 17, 55, 20, 38, 55];
  // console.log(mergeSort(arr)); // [17, 20, 21, 35, 38, 55, 55]
  
