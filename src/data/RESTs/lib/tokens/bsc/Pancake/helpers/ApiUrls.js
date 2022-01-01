class ApiUrls {
	get tokens() {
		return {
			tokens: "/tokens",
			token: (id) => "/tokens/" + id
		};
	}

	get summary() {
		return "/summary";
	}
	get pairs() {
		return "/pairs";
	}
}

module.exports = ApiUrls;
