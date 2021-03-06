export const IP = {
	pattern: "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\:[0-9]+)?$",
	type: 'string'
};
export const DOMAIN = {
	pattern: "^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])(\:[0-9]+)?$",
	type: 'string'
};
export const HOST = {anyOf: [IP, DOMAIN]};
export const HOST_ARRAY = {type: 'array', items: HOST};
export const STRING_NON_EMPTY = {type: 'string', minLength: 1};
export const INTEGER = {type: 'integer'};


const URL = { type: "string", pattern: "^https?://.+" };
const STRING_ARRAY = { type: "array", items: STRING_NON_EMPTY };
const CUSTOM_AUTHORIZATION = {
  type: "object",
  properties: {
    targetUrl: URL,
    authorizationUrl: URL,
    headers: STRING_ARRAY,
    authPath: STRING_NON_EMPTY
  },
  required: ["targetUrl", "authorizationUrl", "headers", "authPath"]
};

// TODO refactor
export const SCHEMA = {
	type: 'object',
	properties: {
		log: {
			type: 'object',
			properties: {
				dir: STRING_NON_EMPTY,
				name: STRING_NON_EMPTY,
				pattern: STRING_NON_EMPTY,
				size: INTEGER,
				level: STRING_NON_EMPTY
			}
		},
		server: {
			type: 'object',
			port: INTEGER,
			host: HOST
		},
		rules: {
			type: 'object',
			patternProperties: {
				'.+': {
					type: 'object',
					properties: {
						customAuthorization: CUSTOM_AUTHORIZATION
					},
				}
			}
		}
	}
};