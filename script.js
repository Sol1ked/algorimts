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

console.log(selectionSort([5, 3, 6, 2, 19]));
