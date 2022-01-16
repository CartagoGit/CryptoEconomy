import { router } from "./root.routes.mjs";
import { TYPES } from "../constants.mjs";
import {
	getSession,
	getSessionActivePage,
	updateSession
} from "../controllers/session.controller.mjs";
const route = TYPES.session.route;

export const setSessionRoutes = () => {
	router.get(route, getSession);
	router.get(route + "/active_page", getSessionActivePage);
	router.put(route, updateSession);

	router.get(route + "*", (req, res) =>
		res.redirect(`${req.baseUrl}${route}`)
	);
};
