import { router } from "./root.routes.mjs";
import { ROUTE_SESSION } from "../constants.mjs";
import {
	getSession,
	getSessionActivePage,
	updateSession
} from "../controllers/session.controller.mjs";

export const setSessionRoutes = () => {
	router.get(ROUTE_SESSION, getSession);
	router.get(ROUTE_SESSION + "/active_page", getSessionActivePage);
	router.put(ROUTE_SESSION, updateSession);

	router.get(ROUTE_SESSION + "*", (req, res) =>
		res.redirect(`${req.baseUrl}${ROUTE_SESSION}`)
	);
};
