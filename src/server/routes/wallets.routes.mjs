import { router } from "./root.routes.mjs";
import { TYPES } from "../constants.mjs";
const route = TYPES.wallets.route;

export const setWalletsRoutes = () => {
	router.get(route, (req, res) => {
		res.send("Api de wallets");
	});

	router.get(route + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${route}`);
	});
};