"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infiniteLoop() {
    while (true) { }
}
fail();
if (typeof a !== 'string') {
    a;
}
const b = 'hello';
// const c: indexable<{}> = 'hello' // c의 타입은 never로 나옴
