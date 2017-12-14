
/*reverseText: function (text, callback){
  let splitText = text.split(" ");
  let reverseArray = splitText.reverse();
    callback (reverseArray.join(" "))
},

capitalizeText: function (text, callback){
  callback(text.toUpperCase());*/


var myPromise = new Promise(function(resolve, reject){
  var animals = "Tigers in a zoo";
  var splitText = animals.split(" ");
  var reverseText = splitText.reverse();

  if(animals){
    resolve(reverseText.join(" "))
  }else{
    reject("Not in zoo")
  };
});


myPromise.then(function(result){
    console.log(result);
}).catch(function(err){
  console.log("failed: "+ err);
});
