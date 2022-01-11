import Router from "express";
import { setCryposRoutes } from "./cryptos.routes.mjs";
import { setFavoritesRoutes } from "./favorites.routes.mjs";
import { setPortfolioRoutes } from "./portfolios.routes.mjs";
import { setSessionRoutes } from "./session.routes.mjs";
import { setTokensRoutes } from "./tokens.routes.mjs";
export const router = Router();

router.use((req, res, next) => {
	console.log("Time: ", Date());
	next();
});

router.get("/", (req, res) => {
	res.send("Welcome into CryptoEconomy lowDB API");
});

setCryposRoutes();
setTokensRoutes();
setFavoritesRoutes();
setPortfolioRoutes();
setSessionRoutes();

router.get("/*", (req, res) => {
	res.redirect(req.baseUrl);
});
