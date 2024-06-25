// app.js
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { connect as db } from "./db.js";
import projectRouter from "./projectRoutes.js";
import issueRouter from "./issueRoutes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/projects", projectRouter);
app.use("/issues", issueRouter);

// Home Page Route
app.get("/", (req, res) => {
  res.redirect("/projects");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  db();
  console.log(`Server running on port ${PORT}`);
});
