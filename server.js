const express = require("express");
const htmlRoute = require("./routes/htmlRoutes");
const apiRoute = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 8000;


app.use();
app.use();
app.use();


apiRoute();
htmlRoute();








app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});