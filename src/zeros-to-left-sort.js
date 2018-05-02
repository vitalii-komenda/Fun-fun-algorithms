const swap = (arr, from, to) => {
  let tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
};

const findNonZero = (arr, from) => {
  for(let i=from; i<arr.length; i++) {
    if (arr[i] !== 0) {
      return i;
    }
  }
  return -1;
}

const sort = (arr) => {
  let i = 0;
  while(i < arr.length) {
    if (arr[i] === 0) {
      let indx = findNonZero(arr, i);

      if (indx === -1) {
        break;
      } else {
        swap(arr, i, indx);
      }
    }

    i++;
  }

  return arr;
};


// c1 = [0,1,0,1];
// c2 = [0,0,0,1];
// c3 = [0,0,0,0];
// c4 = [1,0,0,0];
// c5 = [1,1,1,1];

// sort(arr);
