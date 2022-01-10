import { Low, JSONFileSync } from "lowdb";

let db;

export const createConnection = () => {
    const adapter = new JSONFileSync("src/server/data/db.json");
    db = new Low(adapter);
    db.read();
    db.data ||= { posts: []};
    db.write();

}

export const getConnection = () => db;