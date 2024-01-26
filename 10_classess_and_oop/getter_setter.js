class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email.toUpperCase();
    }
    get password() {
        // return this._password.toUpperCase();
        return `${this._password} is your password`;
    }
    set password(password) {
        this._password = password;
    }
    set email(email) {
        this._email = email;
    }
}

const userOne = new User('userone@gmail.com', 'abc123456');

console.log(userOne.password);
console.log(userOne.email);