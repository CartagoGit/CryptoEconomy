import { router } from "./root.routes.mjs";
import { TYPES } from "../constants.mjs";
const route = TYPES.cryptos.route;

export const setCryposRoutes = () => {
	router.get(route, (req, res) => {
		res.send("Api de cryptos");
	});

	router.get(route + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${route}`);
	});
};
