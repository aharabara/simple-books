// @fixme replace with env variables
let username = "administrator42";
let password = "24rotartsinimda";
let database = "simple-books";

db.auth(username, password);
db = db.getSiblingDB(database);

db.createUser(
    {
        user: username,
        pwd: password,
        roles: [
            {
                role: "readWrite",
                db: database,
            },
        ],
    },
);