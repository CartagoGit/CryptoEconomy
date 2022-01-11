import { router } from "./root.routes.mjs";
import { ROUTE_SESSION } from "../constants.mjs";

export const setSessionRoutes = () => {
	router.get(ROUTE_SESSION, (req, res) => {
		res.send("Api de la sesion");
	});

	router.get(ROUTE_SESSION + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${ROUTE_SESSION}`);
	});
};
