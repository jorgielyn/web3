class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname
    }
   greet(){
       console.log(`Hi ${this.firstname} ${this.lastname}, Welcome to nodeJs`)
       console.log(this.firstname)
       console.log(this.lastname)
       console.log(module)
       console.log(exports)
   }

}

module.exports = Person;