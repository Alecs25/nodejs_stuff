function luckyDraw(player) {
	return new Promise((resolve, reject) => {
		const win = Boolean(Math.round(Math.random()));

		process.nextTick(() => {
			if (win) {
				resolve(`${player} won a prize in the draw!`);
			} else {
				reject(new Error(`${player} lost the draw.`));
			}
		});
	});
}

luckyDraw("Joe")
	.then((data) => {
		if (data) console.log(data);
		return luckyDraw("Caroline");
	})
	.then((data) => {
		if (data) console.log(data);
		return luckyDraw("Sabrina");
	})
	.then((data) => {
		if (data) console.log(data);
	})
	.catch((error) => console.error(error));
