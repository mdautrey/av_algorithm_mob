function bubbleSort(array) {
	let sorted = false;
	const lengthOfTheArray = array.length;
	
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < lengthOfTheArray; i++) {
			if (array[i] > array[i + 1]) {
				let temp = array[i + 1]
				array[i + 1] = array[i]
				array[i] = temp
				sorted = false;
			}

		}

	}
	return array
}

console.log(bubbleSort([3, 5, 1, 7, 0]))
//console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7]))