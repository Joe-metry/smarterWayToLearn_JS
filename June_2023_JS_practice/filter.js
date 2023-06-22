const filteR = (arar, elem) => {
	let nar = [];
	for (let i = 0; i < arar.length; i++){
		if (arar[i] > elem ) {
			nar.push(arar[i]);
		}
		else {
			nar.pop(arar[i]);
		}
	}
	return nar;
}
