function error(message: string): never {
  throw new Error(message)
}

function fail() {
  return error('failed')
}

function infiniteLoop(): never {
  while(true) {}
}

fail()

declare const a: string | number

if (typeof a !== 'string') {
  a
}

type indexable<T> = T extends string ? T & { [index: number]: any } : never

const b: indexable<string> = 'hello'
// const c: indexable<{}> = 'hello' // c의 타입은 never로 나옴