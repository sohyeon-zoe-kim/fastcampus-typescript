/** Aliasing Primitive */
type MyStringType = string
const str = 'world'

let myStr: MyStringType = 'hello'
myStr = str

/** Aliasing Union Type */
let unionPerson: string | number = 0
unionPerson = 'Mark'

type StringOrNumber = string | number

let another: StringOrNumber = 0
another = 'Anna'

/** Aliasing Tuple */
let tuplePerson: [string, number] = ['Mark', 35]

type PersonTuple = [string, number]

let tupleAnother: PersonTuple = ['Anna', 24]

/** Aliasing Function */
type EatType = (food: string) => void