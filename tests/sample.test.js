

const MathOperations = require('./sample')

describe("Calculator tests", () => {

    test('addition', () => {
        expect(MathOperations.sum(2, 2)).toBe(4);
        expect(MathOperations.sum(5, 8)).toBe(13);
    })

    test('substraction', () => {
        expect(MathOperations.diff(2, 2)).toBe(0);
        expect(MathOperations.diff(8, 5)).toBe(3);
    })

    test('multiplication', () => {
        expect(MathOperations.product(2, 2)).toBe(4);
        expect(MathOperations.product(8, 5)).toBe(40);
    })
})