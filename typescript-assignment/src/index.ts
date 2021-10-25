interface IUser{
    firstName: string;
    lastName: string;
    age: number;
}

interface IUserSecond {
    gender: string;
}
type User = IUser & IUserSecond;

class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

class Member extends Person implements User {
    gender: string;

    constructor(firstName: string ="", lastName: string ="", age: number = 0,gender: string = "") {  
        super(firstName,lastName,age);  
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    
    getFullDetails():string {
        return `Your details are : 
        Name: ${this.firstName + this.lastName}
        Age: ${this.age}
        Gender: ${this.gender}
        `
    }
    getInfo(){
        this.firstName = `${prompt('What is your first name?')}`
        this.lastName = `${prompt('What is your last name?')}`
        this.age = Number(`${prompt('What is your age?')}`)
        this.gender = `${prompt('What is your gender?')}`
        
        return this.getFullDetails()
    }
}

const newMember = new Member();
newMember.getInfo();
console.log(newMember)

document.addEventListener()