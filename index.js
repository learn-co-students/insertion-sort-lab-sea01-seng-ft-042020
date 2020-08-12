function findMinAndRemove(array){
    let currentMin = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++){
      if(array[i] < currentMin){
        currentMin = array[i]
        minIndex = i
      }
    }
    array.splice(minIndex, 1);
    return currentMin;
}

function selectionSort(array){
    const sorted = []
    while (array.length != 0) {
        sorted.push(findMinAndRemove(array))
    }
    return sorted
}
