//Require Express
var express = require( 'express' );
var app = express();
var path = require( 'path' );

//Get body-parser
var bodyParser = require( 'body-parser' );

//Other server configs
app.use(bodyParser.json());
app.use(express.static( __dirname + '/mainApp/dist'));

// app.all('*', (req, res, next) => {
//     res.sendFile(path.resolve( __dirname + '/mainApp/dist/index.html'));
// })

//Mongoose/MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_authors_api');
var authorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 }
}, {timestamps: true});
mongoose.model('Author', authorSchema);
var Author = mongoose.model('Author');
mongoose.Promise = global.Promise;

//Routes
//Get all authors
app.get('/api/authors', function(req, res){
    Author.find({}, function(err, author){
        if(err){
            console.log("Error from pulling all Authors", err);
            res.json({message: "Error", error: err});
        } else {
            res.json(author);
        };
    });
});

//Retrieve an author by ID
app.get('/api/edit/:id', function(req, res){
    Author.findOne({_id: req.params.id}, function(err, author){
        if(err){
            console.log("Error getting the author from mongo");
            res.json({message: "Error", error: err});
        } else {
            res.json(author);
        };
    });
});

//Create an author
app.post('/api/new', function(req, res){
    var author = new Author(req.body);

    author.save(function(err){
        if(err){
            console.log('Error while adding author');
            res.json({message: "Error", error: err});
        } else {
            res.redirect('/api/authors');
        };
    });
});

//Update author by ID
app.put('/api/edit/:id', function(req, res){
    Author.update({_id: req.params.id}, req.body, function(err){
        if(err){
            console.log("Error updating: " + err);
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Successfully updated"});
        };
    });
});

//Delete the author by ID
app.delete('/api/edit/:id', function(req, res){
    Author.remove({_id: req.params.id}, function(err){
        if(err){
            console.log('Error when deleteing from mongo' + err);
            res.json({message: "Error", error: err});
        } else {
            res.redirect({message: "Success deleted"});
        };
    });
});

//Listen to server
app.listen(4300, function(){
    console.log("Listening to 4300")
})