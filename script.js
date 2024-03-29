// Binary search

function binarySearch(list, item) {
  let low = 0; //минимальная граница поиска
  let high = list.length - 1; //максимальная граница поиска

  while (low <= high) {
    //Пока не останется 1 элемент, проверяется средний элемент
    let mid = Math.ceil((low + high) / 2);
    let guess = list[mid];
    if (guess == item) {
      return mid; //Возвращается найденное значение
    }
    if (guess > item) {
      high = mid - 1; //Много
    } else {
      low = mid + 1; //Мало
    }
  }

  return null; //Если данного значения не существует, возвращается null
}

let testList = [1, 2, 3, 4, 5, 6];

// console.log(binarySearch(testList, 2));
// console.log(binarySearch(testList, -1));

//Selection Sort

function findSmalles(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];

  while (arr.length > 0) {
    let smallest = findSmalles(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }

  return newArr;
}

// console.log(selectionSort([5, 3, 6, 2, 19]));

//Рекурсия

// function countDown(i) {
//   console.log(i);
//   if (i <= 1) {
//     return;
//   } else {
//     countDown(i - 1);
//   }
// }

// console.log(countDown(5));

//function sum

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

// console.log(sum([2, 1, 2]));

function countOfElemsInArray(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return 1 + countOfElemsInArray(arr.slice(1));
  }
}
// console.log(countOfElemsInArray([2, 1, 2]));

function maxNumInArr(arr) {
  if (arr.length > 1) {
    let subMax = maxNumInArr(arr.slice(1));
    console.log(subMax);
    return arr[0] > subMax ? arr[0] : subMax;
  } else {
    return arr[0];
  }
}

console.log(maxNumInArr([4, 5, 11, 2]));
