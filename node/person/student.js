class Student{
    constructor(firstname, lastname, age, course, schedule){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.course =course;
        this.schedule = schedule
    }

    information(){
        console.log(`Hi! I am  ${this.firstname} ${this.lastname} ${this.age} years of age. my class is ${this.course} with the schedule ${this.schedule}`)
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.age);
        console.log(this.course);
        console.log(this.schedule)
    }

}

module.exports = Student;