const app = require("./app");
const { createConnection } = require("./database");

const port = 3010;
app.listen(port);
console.log("Server on port: ", port);
