const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            const res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');

        });

        it('should async add to numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        })
    })

    describe('#square', () => {
        it('Should square a number', () => {
            const res = utils.squared(11);

            expect(res).toBe(121).toBeA('number');
        });

        it('should square number in async', (done) => {
            utils.asyncSquared(11, (resultat) => {
                expect(resultat).toBe(121).toBeA('number');
                done(); //ne pas oublier le done pour finir le callback
            })
        })
    })



})

// it('should add two numbers', () => {
//     const res = utils.add(33, 11);

//     expect(res).toBe(44).toBeA('number');

//     //     if (res != 44) {
//     //         throw new Error(`Expected 44, but got ${res}`)
//     //     }
// });

// it('should async add to numbers', (done) => {
//     utils.asyncAdd(4, 3, (sum) => {
//         expect(sum).toBe(7).toBeA('number');
//         done();
//     })
// })

// it('Should square a number', () => {
//     const res = utils.squared(11);
//     // if (res != 121) {
//     //     throw new Error(`Expected 121, but got ${res}`)
//     // }
//     expect(res).toBe(121).toBeA('number');
// });

// it('should square number in async', (done) => {
//     utils.asyncSquared(11, (resultat) => {
//         expect(resultat).toBe(121).toBeA('number');
//         done(); //ne pas oublier le done pour finir le callback
//     })
// })

it("should expect some values", () => {
    // expect(12).toNotBe(11);
    // expect({ name: "Vinz" }).toEqual({ name: "Vinz" }); // il faut utiliser toEqual et non toBe pour regarder si deux objets sont pareils
    expect([2, 3, 4]).toInclude(3);
    expect([2, 3, 4]).toExclude(5);
    expect({
        name: 'Vinz', age: 37, location: 'Lyon'
    }).toInclude({ name: 'Vinz' });

})

it('should verify first and last names are set', () => {
    let user = { location: "Lyon", age: 37 }
    const res = utils.setName(user, 'Chew Baka')
    expect(res).toInclude({
        firstName: "Chew",
        lastName: "Baka"
    });
})


