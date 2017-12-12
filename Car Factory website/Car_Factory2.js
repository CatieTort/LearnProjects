//const carCreator = require('./Car_Factory1');
class CarFactory {
  constructor(model_yr, make, color){
    this.modelYear= model_yr,
    this.make= make,
    this.color= color,
    this.speed = 0
    }
        // Add a function to the object that is being returned that concatenates the make, year and color.
       carInfo() {
            return "This is a " + this.modelYear + " " + this.color + " " + this.make;
        }
        //function that returns current speed
        getSpeed(){
          return this.speed;
        }
        //increases the speed by 10 but does not return anything
       accelerate(){
          this.speed += 10;
        }

       brake(){
          //Decreases the speed by 1 if the current speed is less than 7
          if ((this.speed === 0) || (this.speed < 0)){
            //if the current speed is greater than 7 the speed will be decreased by 7
          }else if (this.speed > 7){
            this.speed -= 7;
          }else if (this.speed < 7){
          this.speed --;
          }
              //it does not return anything
          }
        }

        document.getElementById("display").innerHTML = " ";

      function makeCar(){
        function carType(){
          var model_yr = document.getElementById("model").value;
          var make = document.getElementById("brand").value;
          var color = document.getElementById("paint").value;
          return myCar = new CarFactory(model_yr, make, color);
        }
        carType();
        document.getElementById("display").innerHTML = myCar.carInfo();
      }



//loop that accelerates the car to 70
function goFast(){
  myCar.accelerate();
return document.getElementById("display").innerHTML = "Your Speed is: " + myCar.getSpeed();
}
//loop that decelerates the car to 0
function slow(){
  myCar.brake();
  return document.getElementById("display").innerHTML = "Your Speed is: " + myCar.getSpeed();
  }
