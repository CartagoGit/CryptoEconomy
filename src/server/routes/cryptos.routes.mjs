import { router } from "./root.routes.mjs";
import { ROUTE_CRYPTOS } from "../constants.mjs";

export const setCryposRoutes = () => {
	router.get(ROUTE_CRYPTOS, (req, res) => {
		res.send("Api de cryptos");
	});

	router.get(ROUTE_CRYPTOS + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${ROUTE_CRYPTOS}`);
	});
};
