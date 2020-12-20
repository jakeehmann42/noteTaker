const express = require("express");
const htmlRoute = require("./routes/htmlRoutes");
const apiRoute = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

apiRoute(app);
htmlRoute(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});