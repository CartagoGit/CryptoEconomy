// INDEX file for Server

import { getApp } from "./app.mjs";
import { PORT } from "./constants.mjs";
import { createConnection } from "./database.mjs";

const app = getApp();
createConnection();
app.listen(PORT, () => console.log("Server on Port:", PORT));
