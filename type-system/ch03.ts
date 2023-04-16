
/** 서브 타입, 슈퍼 타입 예제(1) */
let sub1: 1 = 1
let sup1: number = sub1
sub1 = sup1

let sub2: number[] = [1]
let sup2: object = sub2
sub2 = sup2

let sub3: [number, number] = [1, 2]
let sup3: number[] = sub3
sub3 = sup3

/** 서브 타입, 슈퍼 타입 예제(2) */
let sub4: number = 1
let sup4: any = sub4
sub4 = sup4

let sub5: never = 0 as never
let sup5: number = sub5
sub5 = sup5

/** 공변 법칙 */
// primitive type
let sub7: string = ''
let sup7: string | number = sub7

// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8: { a: string; b: number } = { a: '', b: 1 }
let sup8: { a: string | number; b: number } = sub8

// array - object와 마찬가지
let sub9: Array<{ a: string; b: number }> = [{ a: '', b: 1 }]
let sup9: Array<{ a: string | number; b: number }> = sub9

/** 반병 법칙 */
class Person {}
class Developer extends Person {
  coding() {}
}

class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer를 할당한 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer()
})

// Developer => Developer 에다가 Person => Developer를 할당한 경우
tellme(function pToD(d: Person): Developer {
  return new Developer()
})

// Developer => Developer 에다가 startupDevelop => Developer를 할당한 경우
tellme(function sToD(d: StartupDeveloper): Developer {
  return new Developer()
})