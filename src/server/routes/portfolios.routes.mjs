import { router } from "./root.routes.mjs";
import { ROUTE_PORTFOLIOS } from "../constants.mjs";

export const setPortfolioRoutes = () => {
	router.get(ROUTE_PORTFOLIOS, (req, res) => {
		res.send("Api de portafolios");
	});

	router.get(ROUTE_PORTFOLIOS + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${ROUTE_PORTFOLIOS}`);
	});
};
