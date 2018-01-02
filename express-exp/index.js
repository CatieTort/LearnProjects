var express = require('express');
var app = express();

app.get('/home', function (request, response) {
 response.send('Hello World!');
});

app.get('/reverse/:text', function (request, response) {
    var phrase = request.params["text"];
    response.send(phrase.split("").reverse().join(""));
});

app.get('/add/:a&:b', function (request, response) {
    //takes parameters a & b puts into seperate variables as strings
    var first = request.params['a'];
    var second = request.params['b'];
    //changes the parameter strings into a integers then adds together parameters and puts into a string
    response.send("Your number is " + ((+first) + (+second)));
});

app.get('/piglatin/:text', function (request, response) {
    var sentence = request.params['text'];
    var saying = sentence.split("+");
    var translate = saying.map(function(el){
// looks for a e i o u and ends at cons. before vowel
        var check = el.search(/[aeiou]/i)
        if(check  == 0){
//If word starts with a vowel, just add way to the end of it
            tag = "way";
//returns word with ay at the end
            return el + tag;
//if word does not start with vowel, piglatin it
        }else if(check  > 0){
//cuts out all char. before vowel
            tag = el.slice(0,check);
//adds tag to the end of word and returns it
            return el.slice(check) + tag + "ay";
        }
    })
//returns new piglatin word
    response.send(translate.join(" "));
});


app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
