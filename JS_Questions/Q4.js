const user = {
    firstName: "Lady",
    lastName: "Gaga",
    address: {
        street: "David king",
        city: "TLV",
        country: "IL",
    },
    calculateAge: function(param) {
        return 24;
    },
};

/*
const copiedUser = { ...user }; // Shallow copy, 
                                // address ref. is the same in both original and copy
*/

// const copiedUser = structuredClone(user); // Does not work with functions

const _ = require("lodash");
const copiedUser = _.cloneDeep(user); // requires lodash library to be installed

copiedUser.firstName = "Jane";
copiedUser.address.street = "Back street";

console.log(copiedUser);
console.log(user);

