// __proto__    -- this preoperty is magical because when we dont find a property on an object we look into __proto__ property

// prototype - this is just an ordinary name nothing to do with javascript we can use anything like sigh as property name

function CreateUser(name, score){
	const object = {
		name,
		score,
	__proto__: CreateUser.prototype
}
	return object
} 

CreateUser.prototype.increment = function(){
	this.score++
}
CreateUser.prototype.displayName = function(){
	console.log(`Name: ${this.name}`)
}
CreateUser.prototype.login = function(){
	console.log("user logged in")
}

const user1 = CreateUser("adarsh", 23)
user1.increment()
user1.displayName()
user1.login()
console.log(user1)
