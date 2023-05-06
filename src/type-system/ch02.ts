interface IPerson {
	name: string
	age: number
	speak(): string
}

type PersonType = {
	name: string
	age: number
	speak(): string
}

let personInterface: IPerson = {} as any
let personType: PersonType = {} as any

personInterface = personType
personType = personInterface

type PersonId = string & { readonly brand: unique symbol }

function PersonId(id: string): PersonId {
	return id as PersonId
}

function getPersonById(od: PersonId) {}

getPersonById(PersonId('id-aaaaa'))
// getPersonById('id-aaaaa') // error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonId'. Type 'string' is not assignable to type '{ readonly brand: unique symbol; }'.