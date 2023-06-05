const autosAttributes = (name, make, country, cost, exportTax) => {
	const vehicles = {
		name: name,
		make: make,
		country: country,
		cost: cost,
		exportTax: exportTax,
		netExpense: function () {
			return this.cost + this.exportTax;
		}
	}

	const vehicleTemplate = `This vehicle is made in ${vehicles.country} it name is ${vehicles.name}, it is a ${vehicles.make} product
	and can be bought at $${vehicles.cost} USD. But one must factor in export tax which woud make the net cost to be $${vehicles.netExpense()}`;

	return vehicleTemplate;
}
console.log(autosAttributes(Ducatti, Audi, Italy, 100000, 10000))
