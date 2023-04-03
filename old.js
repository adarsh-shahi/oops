function createUser(name, score) {
	const newUser = Object.create(userFunctionStore)
	newUser.name = name
	newUser.score = score
	return newUser
}

const userFunctionStore = {
	increment(){
		this.score++;
		
	},
	login(){
		//some functionality to verify user
		console.log("user logged in")
	}
}

const user1 = createUser("adarsh", 20);
const user2 = createUser("shahi", 33);
user1.increment()
console.log(user1)
console.log(user1.__proto__)