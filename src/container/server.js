import http from 'http';

export default class Server extends http.Server {
	constructor(handler) {
		super(handler);
	}

	static notFound(req, res) {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write('Not Found');
		res.end();
	}

	static internalError(req, res) {
		res.writeHead(500, {'Content-Type': 'text/plain'});
		res.write('Internal Server Error');
		res.end();
	}
}