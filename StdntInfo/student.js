var readLine = require("readline-sync")
class student {
    constructor(name , course , year){
        this.name = name;
        this.course = course;
        this.year = year;
        this.schedule = [];
        this.id = this.id
    } 
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setCourse(course){
        this.course = course;
    }
    setYear(year){
        this.year = year 
    }
    addSched(sched){
        this.schedule.push(sched)
    }
    deleteSched(){
        console.log("DELETE SCHEDULE")
        for(let i =0; i< this.schedule.length; i++){
            console.log("Schedule "+ (i+1) +": "+ this.schedule[i])
        }
        var input = readLine.question("Choose sched to delete(1-3)\nType 'no' not to delete\n")
        for(let i = 0 ; i < this.schedule.length+1; i++){
            if(input == i){
                var index = i-1      
                this.schedule.splice(index , 1)
                console.log("-----NEW SCHEDULE-----")
                for(let i =0; i< this.schedule.length; i++){
                    console.log("Schedule "+ (i+1) +": "+ this.schedule[i])
                }
            }
            if(input == "no"){
                break
            }
        }
    }
    displayinfo(){
        console.log(`\n  STUDENTS INFO`)
        console.log("====================")
        console.log(` Name: ${this.name} \n Course: ${this.course} \n Year: ${this.year}\n Student ID: ${this.id}`)
        for(let i =0; i< this.schedule.length; i++){
            console.log("Schedule "+ (i+1) +": "+ this.schedule[i])
        }
        console.log("====================")
    }
}
module.exports = student;