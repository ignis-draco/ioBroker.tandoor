class Tandoor {
	token: string;
	url: string;

	constructor(token: string, ip: string, port: string) {
		this.token = token;
		this.url = ip + ":" + port + "/api/";
	}

	getMealPlan() {}
}
