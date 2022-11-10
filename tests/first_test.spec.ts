import assert from "assert";

describe ("Testing Math functions", function() {
    describe("Testing Square root", function() {
        it("should return 5 when you compute the square root of 25", function() {
            assert.equal(Math.sqrt(25),5);
        });
        it("should return 7 when you compute the square root of 49", function() {
            assert.equal(Math.sqrt(49),7);
        });
    });
    describe("Testing the Pow function", function() {
        it("should return 25 when you compute the power of 5", function() {
            assert.equal(Math.pow(5,2),25);
        });
       
    });
}) ;
