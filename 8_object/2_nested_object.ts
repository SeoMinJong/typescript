/**
 * Nested Object
 */

type NestedPerson = {
    identity:{
        name: string;
        age: number;
    }
    nationality: string;
}

const person: NestedPerson = {
    identity:{
        name: 'name',
        age: 27
    },
    nationality:'korea'
}

type TPerson = {
    identity: TPersonIdentity,
    nationality: string;
}

type TPersonIdentity = {
    name: string;
    age: number;
}

const person2: TPerson = {
    identity:{
        name: 'name',
        age: 27
    },
    nationality:'korea'
}

interface IPerson {
    identity: IPersonIdentity,
    nationality: string;
}

interface IPersonIdentity{
    name: string;
    age: number;
}

const person3: IPerson = {
    identity:{
        name: 'name',
        age: 27
    },
    nationality:'korea'
}