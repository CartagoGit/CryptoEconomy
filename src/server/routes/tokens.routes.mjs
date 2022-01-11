import { router } from "./root.routes.mjs";
import { ROUTE_TOKENS } from "../constants.mjs";

export const setTokensRoutes = () => {
	router.get(ROUTE_TOKENS, (req, res) => {
		res.send("Api de Tokens");
	});

	router.get(ROUTE_TOKENS + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${ROUTE_TOKENS}`);
	});
};
