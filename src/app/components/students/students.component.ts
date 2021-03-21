import { AnalysisOutput } from "@angular/compiler-cli/src/ngtsc/transform";
import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataService } from "./../../services/data.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  actualStudent: string= "";
  students: any[] = [];
  @Input() courses: {
    courseName: string,
    courseQualy: number
    }[] = []
    
  constructor(public _services: DataService) {
    this.students = _services.readStudentList();
  }

  ngOnInit() {
    this.students = this._services.readStudentList();
  }

  updateStudentCoursesById(id: string, courses: Array<any>){
    console.log(this.courses);
    this._services.updateStudentCoursesById(id, courses);
  }

  getCoursesByStudetn(id: string){
    this.actualStudent = id;
    this.courses = this._services.getCoursesByStudent(id);
    console.log(this.courses);
  }

    assignNewQualy(){
      console.log(this.courses);
    } 

    addStudent(id: string, name: string){

    }

    deleteStudent(id: string){
      this._services.deleteStudentById(id);
      this.ngOnInit();
    }

    showNewStudent(){      
      document.getElementById("newStudentForm").style.display = '';
    }


    hideNewStudent(){      
      document.getElementById("newStudentForm").style.display = 'none';
    }
}
