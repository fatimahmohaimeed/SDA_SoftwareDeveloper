const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
    app.get("/", PlayerController.index);
    app.post("/new", PlayerController.createPlayer);
    app.get("/all", PlayerController.findAllPlayer);
    app.get("/find/:id",PlayerController.findOne);
    app.put("/update/:id", PlayerController.updatePlayer);
    app.delete("/delete/:id", PlayerController.deletePlayer);


}

