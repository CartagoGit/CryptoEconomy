import express from "express";
import { Low, JSONFileSync } from "lowdb";
import morgan from "morgan";

const PORT = 3010;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

const adapter = new JSONFileSync("db.json");
const db = new Low(adapter);
await db.read();
db.data ||= { posts: [] };

const { posts } = db.data;

app.get("/posts/:id", async (req, res) => {
	const post = posts.find((p) => p.id === req.params.id);
	res.send(post);
});

app.post("/posts", async (req, res, next) => {
	const post = posts.push(req.body);
	await db.write();
	res.send(post);
});

app.listen(PORT, () => {
	console.log("listening on port: " + PORT);
});
