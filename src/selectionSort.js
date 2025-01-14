// swap function helper
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    var min = i;
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}
