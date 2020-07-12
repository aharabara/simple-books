let username = env.getPath("MONGO_INITDB_ROOT_USERNAME");
let password = env.getPath("MONGO_INITDB_ROOT_PASSWORD");
let database = env.getPath("MONGO_INITDB_DATABASE");

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