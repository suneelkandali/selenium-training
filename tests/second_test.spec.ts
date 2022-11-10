import assert from "assert";

describe ("Testing Math functions", function() {
    describe("Testing Sum of two numbers", function() {
        it("should return 5 when 2 and 3 added", function() {
            assert.equal((2+3),5);
        });
        it("should return 7 when added 4 and 3", function() {
            assert.equal((4+3),7);
        });
    });

    describe("Testing difference of two numbers", function() {
        it("should return 1 when subtracted 2 from 3", function() {
            assert.equal((3-2),1);
        });
        it("should return 4 when subtracted 4 from 10", function() {
            assert.equal((10-4),6);
        });
    });

    describe("Testing product of two numbers", function() {
        it("should return 10 when multiply 2 by 3", function() {
            assert.equal((2*3),6);
        });
        it("should return 10 when multiply  5 by 5", function() {
            assert.equal((5*5),25);
        });
    });

    describe("Testing quotient of two numbers", function() {
        it("should return 2 when 10 divided by 5", function() {
            assert.equal((10/5),2);
        });
        it("should return 5 when 25 divided by 5", function() {
            assert.equal((25/5),5);
        });
    });
    
}) ;
