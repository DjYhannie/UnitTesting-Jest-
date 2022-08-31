const math = require("../math")
test('Sould calculate total Tip', () => {
    const total = math(10, 0.3)
    if (total !== 13)
    // throw new Error("Total should be 13 but got " + total)
    expect(total).toBe(13);
})

test('Should calculate tip Total with default percentage', () => {
    const total = math(10)
    expect(total).toBe(12);
})

const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0)
            reject(new Error('Number should be no-negative'))
            resolve(a + b);
        }, 2000)
    })
}

// test('should test async', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

// test('should return sum of two number', (done) => {
//     add(3,2)
//     .then(sum => expect(sum).toBe(5))
//     done()
// })

test('should return sum of two number', async () => {
    const sum = await add(10,20)
    expect(sum).toBe(30)
})




