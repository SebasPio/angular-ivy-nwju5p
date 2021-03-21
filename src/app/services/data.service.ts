import { Injectable } from '@angular/core';

  interface course {
    courseName: string,
    courseQualy: number
  }

  interface student{
    studentId: string,
    studentName: string,
    studentCourses: Array<course>,
    isActive: boolean
  }

@Injectable()
export class DataService {
  public studentsList: Array<student> = []
  constructor() {
    this.studentsList.push({
      studentId: "20213030",
      studentName: "Sebastian Pioquinto",
        isActive: true,
      studentCourses: [{
        courseName: "Matematicas",
        courseQualy: 6.5,
      },
      {
        courseName: "Historia",
        courseQualy: 4.2
      }]
    })
        this.studentsList.push({
      studentId: "20213031",
      studentName: "Jesus Cruz",
        isActive: true,
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
  return this.studentsList.filter(x=>x.isActive);
}

getCoursesByStudent(id: string){
return this.studentsList.find(x=>x.studentId == id).studentCourses;
}

updateStudentCoursesById(id: string, newData: Array<course>){
this.studentsList.find(x=>x.studentId == id).studentCourses = newData;
}

deleteStudentById(id: string){
  this.studentsList.find(x=>x.studentId == id).isActive = false;
}

addStudent(id: string, name:string){
  this.studentsList.push({
    studentId: id,
    studentName: name,
    isActive: true,
    studentCourses: []
  })
}

}