"use strict";
// create by object literal
const personal = {
    name: 'mark',
    age: 39,
};
// create by Object.create
const person2 = Object.create({
    name: 'mark',
    age: 39,
});
let obj2 = {};
obj2 = { name: 'Mark' };
obj2 = [{ name: 'Mark' }];
// obj2 = 39 //error
