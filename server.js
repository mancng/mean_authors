//Require Express
var express = require( 'express' );
var app = express();
var path = require( 'path' );

//Get body-parser
var bodyParser = require( 'body-parser' );

//Other server configs
app.use(bodyParser.json());
app.use(express.static( __dirname + '/mainApp/dist'));

//Mongoose/MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_authors_api');
var authorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quotes: [
        {content: {type: String, minlength: 3 }, 
         votes: {type: Number, default: 0}}
    ]
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
        }
    })
})

//Retrieve an author by ID
app.get('/api/edit/:id', function(req, res){
    Author.findOne({_id: req.params.id}, function(err, author){
        if(err){
            console.log("Error getting the author from mongo");
            res.json({message: "Error", error: err});
        } else {
            res.json(author);
        }
    })
})

//Create an author
app.post('/api/new', function(req, res){
    var author = new Author(req.body);

    author.save(function(err){
        if(err){
            console.log('Error while adding author');
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Successfully added"});
        }
    })
})

//Update author by ID
app.put('/api/edit/:id', function(req, res){
    Author.update({_id: req.params.id}, req.body, {runValidators: true}, function(err){
        if(err){
            // console.log("Error updating: " + err);
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Successfully updated"});
        }
    })
})

//Add a quote by author ID
app.put('/api/write/:id', function(req, res){
    Author.update({_id: req.params.id}, {$push:req.body}, {runValidators: true}, function(err){
        if(err){
            console.log("Error adding quote" + err);
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Successfully adding a quote"});
        }
    })
})

//Delete a quote by author ID
app.put('/api/write/:id/delete', function(req, res){
    Author.findOne({_id: req.params.id}, function(err, author){
        if(err){
            res.json({message: "Error", error: err});
        } else {
            for( i = 0; i < author.quotes.length; i++){
                if(author.quotes[i]._id == String(req.body.quoteId)){
                    author.quotes.splice(i, 1);
                    author.save(function(err){
                        if(err){
                            res.json({message: "Error", error: err});
                        } else {
                            res.json({message: 'Successfully deleted quote'})
                        }
                    })
                }
            }
        }
    })
})

//Increment a vote on one quote
app.put('/api/write/:id/voteup', function(req, res){
    Author.findOne({_id: req.params.id}, function(err, author){
        if(err){
            res.json({message: "Error", error: err});
        } else {
            // console.log(author.quotes)
            for( i = 0; i < author.quotes.length; i++){
                if(author.quotes[i]._id == String(req.body.quoteId)) {
                    console.log("MATCHED!")
                    author.quotes[i].votes++;
                    author.save(function(err){
                        if(err){
                            res.json({message: "Error", error: err});
                        } else {
                            res.json({message: 'Successfully upvoted'})
                        }
                    })
                }
            }
        }
    })
})


//Decrement a vote on one quote
app.put('/api/write/:id/votedown', function(req, res){
    Author.findOne({_id: req.params.id}, function(err, author){
        if(err){
            res.json({message: "Error", error: err});
        } else {
            // console.log(author.quotes)
            for( i = 0; i < author.quotes.length; i++){
                if(author.quotes[i]._id == String(req.body.quoteId)) {
                    console.log("MATCHED!")
                    author.quotes[i].votes--;
                    author.save( function(err){
                        if(err){
                            console.log("Error when down voting" + err);
                            res.json({message: "Error", error: err});
                        } else {
                            res.json({message: "Sucessfully down voted"});
                        }
                    })
                } else {
                    console.log("NO MATCHING QUOTE FOUND");
                }
            }
        }
    })
})

//Delete the author by ID
app.delete('/api/edit/:id', function(req, res){
    Author.remove({_id: req.params.id}, function(err){
        if(err){
            console.log('Error when deleteing from mongo' + err);
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Success deleted"});
        }
    })
})

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve( __dirname + '/mainApp/dist/index.html'));
})

//Listen to server
app.listen(4300, function(){
    console.log("Listening to 4300")
})