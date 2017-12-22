let ToDo = require('./models').ToDo

// MomList.all({
//   where: {
//     id: 6
//   }
// }).then(function(records){
//     let promises = records.map(function(momlist){
//       return momlist.destroy()
//     })
//
//     return Promise.all(promises)
//   }).then(function(results){
//     console.log("it's gone!")
//   })

// MomList.create({
//   Time: '7 am',
//   Activity: 'Drive Kids to school',
//   Notes: 'Do not forget lunches',
//   Done: 'incomplete'
// }).then(function(momlists){
//   console.log(momlists.get())
// }).catch(function(error){
//   console.log(error)
// })
//
// MomList.create({
//   Time: '11:30 am',
//   Activity: 'Go to Spa',
//   Notes: 'chill out- massage',
//   Done: 'incomplete'
// }).then(function(momlists){
//   console.log(momlists.get())
// }).catch(function(error){
//   console.log(error)
// })

ToDo.create({
  Time: '6:30 pm',
  Activity: 'Gym',
  Notes: 'Leg Day',
  Done: 'incomplete'
}).then(function(todos){
  console.log(todos.get())
}).catch(function(error){
  console.log(error)
})
