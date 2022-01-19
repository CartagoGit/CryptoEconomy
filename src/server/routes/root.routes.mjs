import Router from "express";
import { createNewDB } from "../database.mjs";
import { setCryptosRoutes } from "./cryptos.routes.mjs";
import { setFavoritesRoutes } from "./favorites.routes.mjs";
import { setPortfolioRoutes } from "./portfolios.routes.mjs";
import { setSessionRoutes } from "./session.routes.mjs";
import { setTokensRoutes } from "./tokens.routes.mjs";
import { setWalletsRoutes } from "./wallets.routes.mjs";
export const router = Router();

// TO SHOW DATE IN LOG
// router.use((req, res, next) => {
// 	console.log("Time: ", Date());
// 	next();
// });

//Response a message in base route
router.get("/", (req, res) => {
	res.status(404).send("Welcome into CryptoEconomy lowDB API. You used a bad request data");
});


setCryptosRoutes();
setTokensRoutes();
setFavoritesRoutes();
setPortfolioRoutes();
setSessionRoutes();
setWalletsRoutes();

//Adicional to reset DB
router.get("/reset_db", (req, res) => {
	if (req.body.reset_db === true) {
		createNewDB();
		res.status(200).send("DB reseted");
	} else {
		res.status(412).send("DB isn't reseted");
	}
});

//Redirect others request to main route
router.get("/*", (req, res) => res.redirect(req.baseUrl));
