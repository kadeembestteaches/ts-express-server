/**
 * Calculates the sum of two numbers.
 *
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The second number to be added.
 * @returns {number} The sum of num1 and num2.
 */
function calSum(num1, num2) {
    return num1 + num2;
}
/**
 * Calculates the sum of two randomly generated numbers within a specified maximum range.
 *
 * @param {number} num1 - The first number to be added (not used in calculation).
 * @param {number} num2 - The second number to be added (not used in calculation).
 * @param {number} maxNumber - The maximum range for generating random numbers.
 * @returns {number} The sum of two randomly generated numbers within the specified range.
 */
function calRandomSum(num1, num2, maxNumber) {
    const randomNum1 = Math.floor(Math.random() * maxNumber) + 1;
    const randomNum2 = Math.floor(Math.random() * maxNumber) + 1;
    return randomNum1 + randomNum2;
}
export { calSum, calRandomSum };
