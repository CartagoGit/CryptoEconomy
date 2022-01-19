import { router } from "./root.routes.mjs";
import { TYPES } from "../constants.mjs";
import { crud } from "../controllers/crud.controller.mjs";
const { route, name: type } = TYPES.cryptos;
const call = (req, res) => crud(req, res, type);

export const setCryptosRoutes = () => {
	//CRUD neccesary for this type
	router.route(route).get(call).patch(call);

	//Others aditional routes
	// type required, and params to look for in data

	//Redirect others request to main route
	router.get(route + "*", (req, res) => res.redirect(`${req.baseUrl}${route}`));
};
