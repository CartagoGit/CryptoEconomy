import isX from "../../helpers/isX.js";

export class Session {
	/**
	 * @Statics
	 */
	static getSchema = () => {
		return new this();
	};

	/**
	 * @Constructor
	 */
	constructor(data = {}) {
		const { active_page = null } = data;
		this.active_page = isX.isEmptyObject(data) ? null : active_page;
	}

	/**
	 * @Functions
	 */
	setActivePage = (arg = null) => {
		this.active_page = arg;
	};

	getActivePage = () => {
		return this.active_page;
	};
}
