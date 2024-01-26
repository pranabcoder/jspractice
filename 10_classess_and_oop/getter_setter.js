class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

const userOne = new User('userone@gmail.com', '123456');

console.log(userOne.password);