"use strict";
let personInterface = {};
let personType = {};
personInterface = personType;
personType = personInterface;
function PersonId(id) {
    return id;
}
function getPersonById(od) { }
getPersonById(PersonId('id-aaaaa'));
getPersonById('id-aaaaa'); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonId'. Type 'string' is not assignable to type '{ readonly brand: unique symbol; }'.
