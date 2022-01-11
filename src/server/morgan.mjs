import morgan from "morgan";

import { app } from "./app.mjs";

export const setMorgan = () => {
    app.use(morgan("dev"));
};
