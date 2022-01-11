import { getApp } from "./app.mjs";
import { PORT } from "./constants.mjs";
import { createConnection } from "./database.mjs";


createConnection();
const app = getApp();
app.listen(PORT, () => console.log("Server on Port:", PORT));
