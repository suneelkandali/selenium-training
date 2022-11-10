import assert from "assert";

exports.mochaHooks = {

    beforeEach() {
        console.log("This is a root level before each");
    }

}           
