class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const chai = new Teacher('chai', 'chai@email.com', '1234');
chai.addCourse();
chai.logMe();

const masalachai = new User('masalachai');
masalachai.logMe();

console.log(chai === masalachai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);