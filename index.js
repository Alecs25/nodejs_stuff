// Imports the Node.js core http module (or with node:http).
// Creates an HTTP server with the http.createServer method.
// Set the response status code to 200
// Sets the response header: Content-Type: text/html
// Sends an HTML response body containing any message.
// Make the server listen to the port 3000

import { createServer } from "node:http";

const server = createServer((request, response) => {
	console.log("richiesta ricevuta");

	response.statusCode = 200;
	response.setHeader("Content-Type", "text/html");

	response.end("<html><body><p>ciao mondo</p></body></html>");
});

server.listen(3000, () => {
	console.log("server avviato e in ascolto");
});
