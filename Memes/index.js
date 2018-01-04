var express = require('express')
var app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

var memesList = [
    {
        id: 0,
        image: "/images/memes_1.jpg",
        text: "Don't commment your code? I live dangerously too"
    },

    {
        id: 1,
        image: "/images/memes_2.png",
        text: "Girls who write code, So hot right now"
    },

    {
        id: 2,
        image: "/images/memes_3.jpg",
        text: "I know Javascript"
    }
]



app.get('/', function(req, res){
    res.render("home");
})
app.get('/memes', function(req, res){
    var allMemes = memesList.map(function(el){
        return el.image
    })
    res.render("memes", {'image': allMemes });
})

app.get('/meme/:id', function(req, res){
    var id = req.params['id']
    var meme = memesList.map(function(el){
        return el.image
    })
    res.render("meme", {'images': memesList[id].image, 'text': memesList[id].text})
})
//
// app.get('/danger', function(req, res){
//     res.render("danger", {'image': memesList[0].image, 'text': memesList[0].text});
// })
//
// app.get('/codegirls', function(req, res){
//     res.render("codegirls", {'image': memesList[1].image, 'text': memesList[1].text});
// })
//
// app.get('/iknow', function(req, res){
//     res.render("iknow", {'image': memesList[2].image, 'text': memesList[2].text});
// })

app.listen(3000, function(){
    console.log('Success! You are connected on port 3000!')
})
