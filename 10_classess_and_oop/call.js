function setUserName(username){
    // Complex DB calls
    this.username = username;
    console.log("called");
}

function CreateUser(username, email, password){
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new CreateUser("Chai", "chai@facebook.com", "123456");

console.log(chai);