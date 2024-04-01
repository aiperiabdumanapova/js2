function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const numbers = [15, 25, 35, 45, 55];
const numbers2 = [10, 20, 30, 60, 70];
console.log(sumArray(numbers)); 
console.log(sumArray(numbers2));

