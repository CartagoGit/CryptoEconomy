const buildRequestOptions = require("./BuildRequestOptions.js");
const returnObject = require("./returnObject.js");

const request = async (path, params) => {
	let options = buildRequestOptions(path, params);
	return new Promise((resolve, reject) => {
		try {
			const url = `${options.uri}`;
			fetch(url).then(async (res) => {
				const body = await res.json();
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
