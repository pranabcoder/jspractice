class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get password() {
        // return this._password.toUpperCase();
        return `${this._password} is your password`;
    }
    set password(password) {
        this._password = password;
    }
}

const userOne = new User('userone@gmail.com', 'abc123456');

console.log(userOne.password);