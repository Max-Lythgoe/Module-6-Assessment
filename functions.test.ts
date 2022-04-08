const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    // test('shuffle array should be array type', () => { 
    //     const myArray = [1, 2, 3, 4];
    //     expect(typeof shuffleArray(myArray)).toBe('array')
    // }) 
    test('shuffle array should be same array length', () => { 
        const myArray = [1, 2, 3, 4];
        expect(shuffleArray(myArray).length).toEqual(4)
    })

    // test('shuffle array should have same items', () => { 
    //     const myArray = [1, 2, 3, 4];
    //     expect(shuffleArray(myArray)).toBeTruthy(myArray)
    // })
})

