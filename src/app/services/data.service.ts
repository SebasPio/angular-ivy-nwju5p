import { Injectable } from '@angular/core';

  interface course {
    courseName: string,
    courseQualy: number
  }

  interface student{
    studentId: string,
    studentName: string,
    studentCourses: Array<course>,
    //isActive: bool
  }

@Injectable()
export class DataService {
  public studentsList: Array<student> = []
  constructor() {
    this.studentsList.push({
      studentId: "20213030",
      studentName: "Sebastian Pioquinto",
      studentCourses: [{
        courseName: "Matematicas",
        courseQualy: 6.5
      },
      {
        courseName: "Historia",
        courseQualy: 4.2
      }]
    })
        this.studentsList.push({
      studentId: "20213031",
      studentName: "Jesus Cruz",
      studentCourses: [{
        courseName: "Matematicas",
        courseQualy: 7.5
      },
      {
        courseName: "Historia",
        courseQualy: 8.5
      }]
    })
   }

readStudentList(){
  return this.studentsList;
}

updateStudentById(id: string, newData: student){
//this.studentsList.find(x=>x.studentId == id) = newData;
}

deleteStudentById(id: string){
  this.studentsList;
}

}