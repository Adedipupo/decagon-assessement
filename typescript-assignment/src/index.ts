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

    constructor(firstName: string, lastName: string, age: number,gender: string) {  
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
        return `
            this.firstName = ${prompt('What is your first name?')}
            this.lasttName = ${prompt('What is your last name?')}
            this.age = ${prompt('What is your age?')}
            this.gender = ${prompt('What is your gender?')}
        `
    }
}

const newMember = new Member('Benedict','Jokanola',12,'male');
newMember.getInfo();
console.log(newMember)