
class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  getErrors(){
      return this.errors
  }


  validate(){
    this.errors = {}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('password')
    this.validateEmail('email')
    this.validatePassword('password')
  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is required')
    }
  }


  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an Email')
    }
  }

  validatePassword(fieldName){
      var letter= /[a-zA-Z]/;
      var number= /[0-9]/;
      if(this.fields[fieldName].length < 8){
          this.addError(fieldName, 'needs a length of at least 8 characters')
      }if(!this.fields[fieldName].match(letter)) {
          this.addError(fieldName, 'password must contain letters')
      }if(!this.fields[fieldName].match(number)) {
          this.addError(fieldName, 'password must contain at least 1 number')
      }
  }

//if an error exists for a fieldName then push the new error message connected to the fieldName into the existing array
  addError(fieldName, message){
    if(this.errors[fieldName]){
        this.errors[fieldName].push(message)
    } else {
    //if an error does not exist yet for that fieldName then add an array with the error messages inside of it
        this.errors[fieldName]= [message]
    }
    return this.errors
  }

}

const store = new RegistrationStore()
export default store
