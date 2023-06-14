const person = {
	age: 32,
	place: 'Port-Harcourt City',
	name: ["Joseph", "Ubi"],
	bio: function () {
		console.log(`Hi there, my name is ${this.name[0]} ${this.name[1]}, I am ${this.age} years old and I live in 
		${this.place} for now`);
	},
};
