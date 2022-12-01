
//This function is basically itrating over the entire array items
//and passing all of array items as an argument to callback function.

function forEach(items, callback) {

    for(let i = 0; i < items.length; i++) {
        callback(items[index])
    }

    //callback(0)
    //callback(1)

}

/*
In order to test the above function, we need to mock the callback functionto
to test it
*/

const mockCallback = jest.fn(x => x + 7)

/*
function mockCallback(x) {
    return x + 7
}
*/

forEach([0, 1], mockCallback)

TextDecoderStream("testing the mock function", () => {

    //mockCallback.mock.calls -> Mockcall function is called with which argument
    //mockCallback.mock.calls -> [arg1, arg2] -> [0, 1]
    expect(mockCallback.mock.calls.length).toBe(2)
    expect(mockCallback.mock.results[0].value).toBe(7)
    expect(mockCallback.mock.results[1].value).toBe(8)
    
})