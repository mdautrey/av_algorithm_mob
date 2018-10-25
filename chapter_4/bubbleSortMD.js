function bubbleSort(array) {
    let sorted = false
    let n = 0 // number of loops
    let p = 0 // number of variable assignments
    const lengthOfTheArray = array.length
    console.log(array)
    while (!sorted) {
        sorted = true; p++
        for (let i = 0; i < lengthOfTheArray; i++) {
            if (array[i] > array[i + 1]) {
               let temp = array[i + 1]; p++
               array[i] = temp; p++
               sorted = false; p++
            }
            n++
        }
    }
    console.log(n)
    console.log(p)
    return array
}


console.log(bubbleSort([3, 5, 1, 7, 0, 4, 9, 10, 2, 3, 45, 28, 45, 34, 33, 23, 6, 7, 8, 19]))
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7]))
//// test for fun Mikael
function bubbleSort2(array) {
    const l = array.length
    let n = 0
    let p = 0
    console.log(array)
    for (let i = l - 1; i > 0; i--) {
        let bubble = array[i - 1]; p++
        let j = i; p++
        while (bubble > array[j] && j < l) {
            array[j - 1] = array[j]; p++
            j++; p++
            n++
        }
        array[j - 1] = bubble; p++
    }
    console.log(n)
    console.log(p)
    return array
}
console.log(bubbleSort2([3, 5, 1, 7, 0, 4, 9, 10, 2, 3, 45, 28, 45, 34, 33, 23, 6, 7, 8, 19]));
