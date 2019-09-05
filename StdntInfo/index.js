var student =  require('./student')
var readLine = require("readline-sync")
var http = require('http')
var list = [] 
var count = 0
var studentNum = 0
var Studentid = 0


function addStudent(){    
    let student1 = new student()
    student1.setName(readLine.question('\tName: '))
    student1.setCourse(readLine.question('\tCourse: '))
    student1.setYear(readLine.question('\tYear: '))
    Studentid++
    student1.id = Studentid
    list.push(student1)
}

function viewlist(){
    for(let i =0 ; i< list.length; i++){
        console.log("student "+ (i+1) + ":" + list[i].getName())
    }
}
function deleteStudent(){
    var input1 = readLine.question("Enter ID to delete student \n")
    for(let i = 0 ; i < list.length+1; i++){
        if(input1 == i){
            var index = i-1      
            list.splice(index , 1)
            viewlist()
        }
    }   
}

while(true){

    var input1 = readLine.question("\nDo you want to add Information?")
    if(input1 == "yes"){
        console.log("\nADD STUDENT :")
        addStudent()
        while(count!= 3){
            list[studentNum].addSched(readLine.question('Add Schedule: '))
            count++
        }
        list[studentNum].deleteSched()
    } 
    studentNum++ 
    count =0;
    if(input1 == "no"){
        for(let i = 0; i<list.length ; i++){
            list[i].displayinfo()
        }
        console.log("=======LIST=======")
        viewlist()
        deleteStudent()
        break
    }
    
    continue
}
http.createServer(function(request , response){
    console.log("server started!")
    response.write()//start the response
    response.end()//end the sever response
}).listen(1400)
