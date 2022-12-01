

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

    test("truthy operations", () => {

        var name = "Software Testing"
        var n = null
        expect(n).toBeNull()

        expect(name).toBeTruthy()
        expect(n).toBeFalsy()
        expect(0).toBeFalsy()
    })

    //Number matchers
    test("numeric operations", () => {

        var num1 = 100;
        var num2 = -20;
        var num3 = 0;

        expect(num1).toBeGreaterThan(10)
        expect(num2).toBeLessThanOrEqual(0)
        expect(num3).toBeGreaterThanOrEqual(0)
    })

    test("string matchers", () => {
        var string1 = "Software Testing";

        var string2 = "abc"
        expect(string1).toMatch("Software Testing")
        expect(string1).not.toMatch(string2)
    })

    test("arrays and literals", () => {

        const shoppinglist = ['glass', 'trash bags', 'towels']

        expect(shoppinglist).toContain('glass')
    })

    test("objects", () => {

        const data = {
            one: 1
            //two: 2
        };

        data.two = 2

        expect(data).toEqual({one:1, two: 2})
    })

    test('testing errors', () => {
        expect( () => compileCode()).toThrow()
        expect( () => compileCode()).toThrow(Error)
    })
})

describe("Jest Hooks", () => {

    beforeAll(() => {
        console.log("beforeAll Called")
    })

    afterAll(() => {
        console.log("AfterAll called")
    })
    beforeEach(() => {
        console.log("Before Each Called");
    })

    afterEach(() => {
        console.log("after Each called")
    })

    test('addition', () => {
        expect(MathOperations.sum(2, 2)).toBe(4);
        expect(MathOperations.sum(5, 8)).toBe(13);
    })

    test('substraction', () => {
        expect(MathOperations.diff(2, 2)).toBe(0);
        expect(MathOperations.diff(8, 5)).toBe(3);
    })
})