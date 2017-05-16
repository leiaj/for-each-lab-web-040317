function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  let array = [1, 2, 3, 4, 5]
  array.forEach(callback)
  return array
}

let array = [1, 2, 3, 4, 5]

function doToArray(array, callback){
  array.forEach(callback)
}
