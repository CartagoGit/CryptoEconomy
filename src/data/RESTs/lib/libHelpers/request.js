// import fetch from "node-fetch";
import axios from "axios";
import buildRequestOptions from "./BuildRequestOptions.js";
import returnObject from "./returnObject.js";
const request = async (path, params, Constants) => {
	let options = buildRequestOptions(path, params, Constants);

	return new Promise((resolve, reject) => {
		try {
			const url = `${options.uri}`;
			axios(url).then(
				async (res) => {
					console.log(res);
					const body = await res.data;
					if (!!body.error || !(res.status < 200 || res.status >= 300))
						throw new Error(
							"Incorrect response from api: " + options.uri.toString()
						);
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
				},
				(error) => {
					return Promise.reject(error);
				}
			);
		} catch (error) {
			reject(error);
		}
	});
};

export default request;
