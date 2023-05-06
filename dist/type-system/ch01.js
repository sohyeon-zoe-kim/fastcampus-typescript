"use strict";
/** 타입이란 해당 변수가 할 수 있는 일을 결정함 **/
function f1(a) {
    return a;
}
/** 함수 사용법에 대한 오해를 야기하는 JavaScript **/
function f2(a) {
    return a * 38;
}
console.log(f2(10)); //380
console.log(f2('Mark')); //NaN
/** TypeScript의 추론에 의지하는 경우 **/
function f3(a) {
    return a * 38;
}
console.log(f3(10)); //380
console.log(f3('Mark') + 5); //NaN
/** noImplictAny 에 의한 방어 **/
function f3(a) {
    return a * 38;
}
console.log(f3(10));
console.log(f3('Mark') + 5); // error TS7006: Parameter 'a' implicitly has an 'any' type.
/** number 타입으로추론된 리턴 타입 **/
function f4(a) {
    if (a > 0) {
        return a * 38;
    }
}
console.log(f4(5)); //190
console.log(f4(-5) + 5); //NaN
/** number | undefined 타입으로 추론된 리턴 타입 **/
function f4(a) {
    if (a > 0) {
        return a * 38;
    }
}
console.log(f4(5));
console.log(f4(-5) + 5); // error TS2532: Object is possibly 'undefined'.
/** 모든 코드에서 리턴을 직접해야한다. **/
function f5(a) {
    if (a > 0) {
        return a * 38;
    }
}
/** 매개변수에 object가 들어오는 경우 **/
function f6(a) {
    return `이름은 ${a.name}이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`;
}
console.log(f6({ name: 'Mark', age: 38 }));
console.log(f6('Mark'));
/** object literal type **/
function f7(a) {
    return `이름은 ${a.name}이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`;
}
console.log(f7({ name: 'Mark', age: 38 })); //이름은 Mark이고, 연령대는 30대 입니다.
console.log(f7('Mark')); //이름은 undefined이고, 연령대는 NaN대 입니다.
function f8(a) {
    return `이름은 ${a.name}이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`;
}
console.log(f8({ name: 'Mark', age: 38 })); //이름은 Mark이고, 연령대는 30대 입니다.
console.log(f8('Mark')); // error TS2345: Argument of type 'string' is not assignable to parameter of type '{ name: string; age: number; }'.
