let connection = require('./models/sequelize-connection')
let Country = require('./models/country')

connection.authenticate()
    .then(function(){
        console.log('success!')
    })
    .catch(function(error){
        console.log(error)
    })

// Country.findById(1).then(function(country){
//     console.log(country.get('name'))
// }).catch(function(error){
//     console.log(error)
// })

// Country.all().then(function(countries){
//     let mapped = countries.map(function(country){
//         return country.get()
//     })
//     console.log(mapped)
// })

// Creating records/instances in a table


// let texas = Country.create({
//     code: 'TEX',
//     name: 'Texas',
//     continent: 'Texas',
//     region: 'Kickass'
// })
//
// let shoebox = Country.create({
//     code: 'SHBX',
//     name: 'Shoebox',
//     continent: 'Shelf',
//     region: 'Closet'
// })
//     .then(function(){
//
//     })
//     .catch(function(error){
//     })

// Deleting instances/records in a table

// Country.all({ // look at all within Country database
//     where: {
//         continent: 'Texas'
//     }
// })
//     .then(function(records){
//         let promises = records.map(function(country){
//             return country.destroy()
//         })
//
//         return Promise.all(promises)
//     })
//     .then(function(results){
//         console.log('He gone')
//     })
//     .catch(function(error){
//         console.log(error)
//     })

// let sandwich = Country.create({
//     code: 'Grilled',
//     name: 'Delish',
//     continent: 'Plate',
//     region: ' '
// })
//     .then(function(country){
//         country.region = "Table"
//         return country.save()
//     })
//     .catch(function(error){
//         console.log(error)
//     })



// Console Logged all names and continents for all instances
Country.findAll({
    attributes: ['name','continent']
})
    .then(function(records){
        let promises = records.map(function(instance){
            console.log(instance.dataValues)
        })
    })
