import { router } from "./root.routes.mjs";
import { ROUTE_FAVORITES } from "../constants.mjs";

export const setFavoritesRoutes = () => {
	router.get(ROUTE_FAVORITES, (req, res) => {
		res.send("Api de Favoritos");
	});

	router.get(ROUTE_FAVORITES + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${ROUTE_FAVORITES}`);
	});
};
