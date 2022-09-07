const { Manager } = require('../models/player.model');

module.exports.findAllPlayer = (request, response) => {
    Manager.find({}).sort({})
    .then(allPlayer => response.json(allPlayer ))
    .catch(err => response.json({ message: "Something went wrong", error: err }));
};

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPlayer = (request, response) => {
    Manager.create(request.body)
    .then(newlyCreatedPlayer => response.json({ player: newlyCreatedPlayer })) //author postman
    .catch(err => response.status(400).json(err));
}

module.exports.findOne = (request, response) => { // what the difference between  findone: or module.exports.findOne =
    Manager.findOne({_id:request.params.id})
    .then(player => response.json(player))
    .catch(err => response.json(err));
}

module.exports.updatePlayer= (request, response) => {
    Manager.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
      .then(updatedPlayer => response.json({ user: updatedPlayer }))
      .catch(err => response.json({ message: "Something went wrong", error: err }));
  };

  module.exports.deletePlayer = (request, response) => {
    Manager.deleteOne({ _id: request.params.id })
      .then(result => response.json({ result: result }))
      .catch(err => response.json({ message: "Something went wrong", error: err }));
    //   .catch(err = response.stats(400).)
  };
