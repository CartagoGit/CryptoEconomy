import Router from "express";
import { createNewDB } from "../database.mjs";
import { setCryposRoutes } from "./cryptos.routes.mjs";
import { setFavoritesRoutes } from "./favorites.routes.mjs";
import { setPortfolioRoutes } from "./portfolios.routes.mjs";
import { setSessionRoutes } from "./session.routes.mjs";
import { setTokensRoutes } from "./tokens.routes.mjs";
export const router = Router();

// TO SHOW DATE IN LOG
// router.use((req, res, next) => {
// 	console.log("Time: ", Date());
// 	next();
// });

router.get("/", (req, res) => {
	res.send("Welcome into CryptoEconomy lowDB API");
});

setCryposRoutes();
setTokensRoutes();
setFavoritesRoutes();
setPortfolioRoutes();
setSessionRoutes();

router.get("/reset_db", (req, res) => {
	if (req.body.reset_db === true) {
		createNewDB();
		res.status(200).send("DB reseted");
	} else {
		res.status(412).send("DB isn't reseted");
	}
});

router.get("/*", (req, res) => res.redirect(req.baseUrl));
