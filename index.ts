import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { SSRApp } from "./frontend/app";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.set("trust proxy", true);
app.use(express.static("public"));
app.set("view engine", "ejs");

/**
 * Routes
 */
app.get("/", (request, response, next) => {
	response.status(200).json({ message: "welcome" });
});

app.get("/app", (request, response, next) => {
	response.render("index", { ssr: SSRApp });
});

app.listen(port, () => {
	console.log(`Timezones by location application is running on port ${port}.`);
});
