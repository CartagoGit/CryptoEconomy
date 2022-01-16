//Default
const PORT = 3010;

const TYPE = {
	name: null,
	route: null
};
const TYPES = {
	cryptos: TYPE,
	tokens: TYPE,
	portfolios: TYPE,
	session: TYPE,
	wallets: TYPE,
	favorites: TYPE
};

//Construct de TYPES constant
Object.keys(TYPES).map((key, index) => {
	/**  Tips to copy an object and not use = to do a reference -> 
	Or convert Object in string Json and Parse to JSON; -> const auxType = JSON.parse(JSON.stringify(TYPE));
	Or Create un new object assigning the type (How Done finally)
	*/
	const auxType = Object.assign({}, TYPE);
	auxType.name = key;
	auxType.route = "/" + key;
	TYPES[key] = auxType;
});

//path routes for api
const ROUTE_API = "/api";

//Folders
const LOGS_FOLDER = "./logs";
const LOGS_ERROR_FOLDER = "./logs/errors";

export { PORT, TYPES, ROUTE_API, LOGS_FOLDER, LOGS_ERROR_FOLDER };
