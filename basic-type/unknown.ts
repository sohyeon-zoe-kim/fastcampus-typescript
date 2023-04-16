declare const maybe: unknown

// const aNumber: number = maybe //unknown을 number에 바로 넣을 수 없음

if (maybe === true) {
  const aBoolean: boolean = maybe

//  const aString: string = maybe // true를 string에 할당할 수 없음
}

if (typeof maybe === 'string') {
  const aString: string = maybe

//  const aBoolean: boolean = maybe // boolean을 string에 할당할 수 없음
}