let express = require('express');
let app = express();
app.use(express.static ('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("form");
});

app.get('/welcome', function(req, res){
    var user = req.query.Name
    res.render("welcome", {'name': user })
});

app.listen(3000, function(){
    console.log('You are connected to port 3000')
});
