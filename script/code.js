function displayMiddleNumber(numbers) {

    numbers.sort((a, b) => a - b);

    const length = numbers.length;
    let middleNumbers = [];

    if (length % 2 === 0) {
        
        const middleIndex1 = length / 2 - 1;
        const middleIndex2 = length / 2;
        middleNumbers = [numbers[middleIndex1], numbers[middleIndex2]];
    } else {
        
        const middleIndex = Math.floor(length / 2);
        middleNumbers = [numbers[middleIndex]];
    }

    console.log("Middle Number(s):", middleNumbers);
}


let numbers = [12, 18, 11, 5, 8, 2];
displayMiddleNumber(numbers);
