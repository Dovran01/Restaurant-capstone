/** @format */

require("dotenv").config();
const path = require("path");
const {
	DATABASE_URL,
	DATABASE_URL_DEVELOPMENT,
	DATABASE_URL_TEST,
	DATABASE_URL_PREVIEW,
	DEBUG,
} = process.env;
module.exports = {
	development: {
		client: "postgresql",
		pool: { min: 1, max: 5 },
		connection: 'postgres://lewxesht:sJhr-Azp8mspE-RFzOFcg-ETyywCiTsr@bubble.db.elephantsql.com/lewxesht',
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
	test: {
		client: "postgresql",
		pool: { min: 1, max: 5 },
		connection: 'postgres://lewxesht:sJhr-Azp8mspE-RFzOFcg-ETyywCiTsr@bubble.db.elephantsql.com/lewxesht',
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
	preview: {
		client: "postgresql",
		pool: { min: 1, max: 5 },
		connection: 'postgres://lewxesht:sJhr-Azp8mspE-RFzOFcg-ETyywCiTsr@bubble.db.elephantsql.com/lewxesht',
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
	production: {
		client: "postgresql",
		pool: { min: 1, max: 5 },
		connection: 'postgres://lewxesht:sJhr-Azp8mspE-RFzOFcg-ETyywCiTsr@bubble.db.elephantsql.com/lewxesht',
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
};