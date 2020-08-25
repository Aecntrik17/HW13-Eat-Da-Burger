// connecting to the external library express which enables node to act as a server with http frameworks
const express = require("express");
// setting variable to port both for external hosting or on the local
const PORT = process.env.PORT || 8080;
// activating the server in a variable we can use later in the file
const app = express();

// Serve static content(front-end files) for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars by using the express-handlebars package
const exphbs = require("express-handlebars");

// identifying main handlebar as home template
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// when res.render, or sending data to the front end, use handlebars
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");
// the router
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
