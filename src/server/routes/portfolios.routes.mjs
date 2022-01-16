import { router } from "./root.routes.mjs";
import { TYPES } from "../constants.mjs";
const route = TYPES.portfolios.route;

export const setPortfolioRoutes = () => {
	router.get(route, (req, res) => {
		res.send("Api de portafolios");
	});

	router.get(route + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${route}`);
	});
};
