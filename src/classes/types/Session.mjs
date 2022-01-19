export class Session {
	constructor() {
		this.active_page = null;
	}

	static getSchema = () => {
		return new this();
	};
}
