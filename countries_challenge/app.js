let connection = require('./models/sequelize_connection.js')
let Country = require('./models/country.js')

connection.authenticate()
  .then(function(){
    console.log('Success! You did it! #1 programmers! GOLD STARS')
  })
  .catch(function(error){
    console.log(error)
  })

Country.findById('BHS').then(function(country){
    console.log(country)
}) .catch(function(error){
    console.log(error)
})
