

//Story 1
// Write a function that creates an object that represents a car with the following properties: model year, make, color

function carMaker(model_yr, make, color) {
  var speed = 0;
  return {
    modelYear: model_yr,
    make: make,
    color: color,
    // Add a function to the object that is being returned that concatenates the make, year and color.
    carInfo: function() {
        return "This car is a " + color + " " + make +  " " + "year: " + model_yr;
    },
    //function that returns current speed
    getSpeed: function(){
      return speed;
    },
    //increases the speed by 10 but does not return anything
    accelerate: function(){
      speed += 10;
    },

    brake: function(){
      //Decreases the speed by 1 if the current speed is less than 7
      if (speed < 7){
        speed --;
        //if the current speed is greater than 7 the speed will be decreased by 7
      }else{
        speed -= 7;
          //it does not return anything
      }
    }
  }
}

var myCar = carMaker.getSpeed();
myCar.getSpeed()

//loop that accelerates the car to 70
function goFast(){
  while (myCar.getSpeed() < 70){
      myCar.accelerate()
  }
}
//loop that decelerates the car to 0
function slow(){
  while(myCar.getSpeed() > 0){
      myCar.brake();
    }
  }


// Story 4
var carMaker = {
    speed: 0,
    maxSpeed: 85,
    accelerate: function(){
    while (this.speed < this.maxSpeed){
        if (this.speed < 80){
            this.speed += 10;
        }else if (this.speed === 80){
            this.speed += 5;
            }
        }
    },
    decelerate: function(){
        while (this.speed > 0){
            this.speed--;
            console.log(this.speed);
        }
    },
}
