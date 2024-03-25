import * as fs from "node:fs";

fs.writeFile("prova.txt", "hello there", (error) => {
	if (error) {
		console.error(error);
		return;
	}
});
