const promise = require("bluebird");
const monitor = require("pg-monitor");

promise.config({
  longStackTraces: true // WARNING: Do not set this option in production!
});

const initOptions = {
  promiseLib: promise
};

// attach to all events at once;
monitor.attach(initOptions, ["query"]);

// Import pg-promise and initialize the library with an empty object.
const pgp = require("pg-promise")(initOptions);

// Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
const connectionURL = "postgres://localhost:5432/wine";

// Creating a new database connection with the provided URL.
const db = pgp(connectionURL);

module.exports = db;
