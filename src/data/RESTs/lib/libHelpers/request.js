
const buildRequestOptions = require("./BuildRequestOptions.js");
const returnObject = require("./returnObject.js");

const request = async (path, params, Constants) => {
	let options = buildRequestOptions(path, params, Constants);
	// return options;
	return new Promise((resolve, reject) => {
		try {
			const url = `${options.uri}`;
			fetch(url).then(async (res) => {
				const body = await res.json();
				if(!!body.error) throw new Error('Incorrect response from api: '+options.uri.toString());
				resolve(
					returnObject(
						!(res.status < 200 || res.status >= 300),
						res.statusText === "" && res.status === 200
							? "Fetched correctly"
							: res.statusText,
						res.status,
						body,
						options
					)
				);
			});
		} catch (error) {
			reject(error);
		}
	});
};

module.exports = request;
