import assert from "assert";


function add(arr: number[]) {
    return arr.reduce((sum, num) => sum + num, 0);
}

type TestCase = {
    arr: number[];
    expected: number;
}
describe("Testing the add() function - alt", function(){
    const testAdd = ({arr, expected} : TestCase) => {
        return function () {
            const res = add(arr);
            assert.equal(res, expected);
        };
    }
    it("correctly adds two numbers", testAdd({arr: [1,2], expected: 3}));
    it("correctly adds three numbers", testAdd({arr: [1,2,3], expected: 6}));
    it("correctly adds four numbers", testAdd({arr: [1,2,3,4], expected: 10}));
});
describe("Testing the add() function", function () {
    const tests = [
        { arr: [1, 2], expected: 3 },
        { arr: [1, 2, 3], expected: 6 },
        { arr: [1, 2, 3, 4], expected: 10 }
    ]

    tests.forEach(({ arr, expected }) => {
        it(`correctly adds ${arr.length} numbers`, function () {
            const res = add(arr);
            assert.equal(res, expected);
        })
    });
});   
