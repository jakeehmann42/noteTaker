const path = require("path");



module.exports = function(app) {

// this is where my HTML 'GET' requests go.


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});





}