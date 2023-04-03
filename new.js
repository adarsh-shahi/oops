function createUser(name, score) {
	this.name = name
	this.score = score
}
console.log(createUser.prototype)

createUser.prototype.increment = function() {
	this.score++;
}

createUser.prototype.login = function() {
	console.log("user logged in")
}
const user1 = new createUser("adarsh", 20);
user1.increment()
console.log(user1)
console.log(user1.__proto__)