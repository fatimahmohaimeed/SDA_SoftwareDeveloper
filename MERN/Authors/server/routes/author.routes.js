const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/author', AuthorController.findAllAuthor);
    app.post('/api/author/new', AuthorController.createAuthors);
    app.get("/api/author/:id", AuthorController.findOneSingleAuthor);
    app.put("/api/author/update/:id", AuthorController.updateExistingAuthor);
    app.delete("/api/author/delete/:id", AuthorController.deleteAnExistingAuthor);
}
