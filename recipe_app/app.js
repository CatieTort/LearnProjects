var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var app = express();
var Family = require('./models').Family
var Baking = require('./models').Baking
var Cooking = require('./models').Cooking
// var Holiday = require('./models').Holiday

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(expressLayouts)


app.get('/', function (request, response) {
    Family.findAll().then(function(families){
      response.render('index', { families: families })
  }).catch(function(err){
      response.send("Error, couldn't fetch Recipes")
  })
});

app.get('/familyrecipes/:id/baking', function (request, response) {
    Baking.findAll({
        where: {
            familyId: request.params.id
        }
    }).then(function(result){
        response.render('baking', { bakingArray: result})
    }).catch(function(err){
      response.send(err)
    })
});

app.listen(3000, function() {
 console.log('Example app listening on port 3000!');
});
