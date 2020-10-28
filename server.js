const express = require("express");

//name express
const app = express();

//add a PORT
const PORT = process.env.PORT || 8000;


// handle parsing
app.use(express.urlencoded({ extended: true}));

app.use(express.json());

app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// start server
app.listen(PORT, function() {
    console.log("App listening on PORT, http://localhost:" + PORT);
});