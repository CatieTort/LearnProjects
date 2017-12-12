
class CarFactory {
  constructor(model_yr, make, color){
    this.modelYear= model_yr,
    this.make= make,
    this.color= color,
    this.speed = 0
    }
        // Add a function to the object that is being returned that concatenates the make, year and color.
       carInfo() {
            return "This car is a " + this.color + " " + this.make +  " " + "year: " + this.modelYear;
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
          if (this.speed < 7){
            this.speed --;
            //if the current speed is greater than 7 the speed will be decreased by 7
          }else{
            this.speed -= 7;
              //it does not return anything
          }
        }
      }


module.exports = CarFactory
