import { calSum, calRandomSum } from "./utils.js";
describe('add function', function () {
    it('should add two numbers correctly', function () {
        expect(calSum(1, 2)).toBe(3);
    });
    it('should return negative results for negative inputs', function () {
        expect(calSum(-1, -1)).toBe(-2);
    });
});
describe("calRandomSum", function () {
    it("should calculate the sum of two random numbers within the specified range", function () {
        const num1 = 5;
        const num2 = 10;
        const maxNumber = 100;
        // Mock Math.random to return predictable values
        jest.spyOn(Math, 'random')
            .mockReturnValueOnce(0.1)
            .mockReturnValueOnce(0.2);
        const result = calRandomSum(num1, num2, maxNumber);
        expect(result).toBe(11 + 21);
        // Restore Math.random to its original implementation
        jest.restoreAllMocks();
    });
});
