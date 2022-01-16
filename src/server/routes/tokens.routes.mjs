import { router } from "./root.routes.mjs";
import { TYPES } from "../constants.mjs";
const route = TYPES.tokens.route;

export const setTokensRoutes = () => {
	router.get(route, (req, res) => {
		res.send("Api de Tokens");
	});

	router.get(route + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${route}`);
	});
};