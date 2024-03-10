/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
    name:string;
    age:number;
}

type CompanyType = {
    company:string;
    companyRegistrationNumber:string;
}

type PersonAndCompany = PersonType & CompanyType;

const jiso: PersonAndCompany = {
    name:'string',
    age:30,
    company:'GK',
    companyRegistrationNumber:'asfasfasfasf',
}

type PetType = {
    petName:string;
    petAge:number;
}

// 이처럼 유니온을 통한 타입의 선언의 경우 필수적으로 
type CompanyOrPet = PersonType | (CompanyType | PetType);
type CompanyOrPet2 = PersonType | CompanyType | PetType;

const companyOrPet: CompanyOrPet2 = {
    // PersonType
    name: 'DD',
    age: 27,
    
    // CompanyType
    // company:'GK',
    companyRegistrationNumber:'asfasfasfasf',

    //PetType
    // petName:'Ori',
    petAge:4,
}