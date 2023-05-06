"use strict";
/** 서브 타입, 슈퍼 타입 예제(1) */
let sub1 = 1;
let sup1 = sub1;
// sub1 = sup1
let sub2 = [1];
let sup2 = sub2;
// sub2 = sup2
let sub3 = [1, 2];
let sup3 = sub3;
// sub3 = sup3
/** 서브 타입, 슈퍼 타입 예제(2) */
let sub4 = 1;
let sup4 = sub4;
sub4 = sup4;
let sub5 = 0;
let sup5 = sub5;
// sub5 = sup5
/** 공변 법칙 */
// primitive type
let sub7 = '';
let sup7 = sub7;
// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8 = { a: '', b: 1 };
let sup8 = sub8;
// array - object와 마찬가지
let sub9 = [{ a: '', b: 1 }];
let sup9 = sub9;
/** 반병 법칙 */
class Person {
}
class Developer extends Person {
    coding() { }
}
class StartupDeveloper extends Developer {
    burning() { }
}
function tellme(f) { }
// Developer => Developer 에다가 Developer => Developer를 할당한 경우
tellme(function dToD(d) {
    return new Developer();
});
// Developer => Developer 에다가 Person => Developer를 할당한 경우
tellme(function pToD(d) {
    return new Developer();
});
// Developer => Developer 에다가 startupDevelop => Developer를 할당한 경우
// tellme(function sToD(d: StartupDeveloper): Developer {
//   return new Developer()
// })
