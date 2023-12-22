require("dotenv").config();

const path = require("path");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

//Routes
const skillRoutes = require("./routes/skillRoutes");

const connectDB = require("./configs/db");

const app = express();
const port = 5000 || process.env.PORT;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");

// Connect to database
connectDB();

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/homeRoutes"));
app.use("/skills", skillRoutes);

// Handle 404
app.get("*", function (req, res) {
  res.status(404).render("404", {
    layout: "./layouts/notfound",
    pageTitle: "صفحه مورد نظر یافت نشد!",
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
