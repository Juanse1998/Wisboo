const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
	server.listen(8000, async () => {
		console.log("%s listening at 8000"); // eslint-disable-line no-console
	});
});
