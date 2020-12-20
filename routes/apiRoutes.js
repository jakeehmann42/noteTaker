const fs = require("fs");
const UUID = require("uuid");


module.exports = function (app) {


    app.get("/api/notes", function (req, res) {
        fs.readFile('./db/db.json', "utf8", (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            return res.json(notes);
        });
    })











    app.post("/api/notes", function (req, res) {
        req.body.id = UUID.v1()
        fs.readFile('./db/db.json', "utf8", (err, data) => {
            let noteSum = JSON.parse(data);
            noteSum.push(req.body);

            fs.writeFile('./db/db.json', JSON.stringify(noteSum), (err) => {
                if (err) throw err;
                res.json(req.body);
            });
        })
    })





    app.delete("/api/notes/:id", function (req, res) {

    })


}