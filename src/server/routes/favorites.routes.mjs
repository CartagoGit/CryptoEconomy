import { router } from "./root.routes.mjs";
import { TYPES } from "../constants.mjs";
const route = TYPES.favorites.route;

export const setFavoritesRoutes = () => {
	router.get(route, (req, res) => {
		res.send("Api de Favoritos");
	});

	router.get(route + "*", (req, res) => {
		res.redirect(`${req.baseUrl}${route}`);
	});
};
