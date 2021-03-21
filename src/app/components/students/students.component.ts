import { AnalysisOutput } from "@angular/compiler-cli/src/ngtsc/transform";
import { Component, Input, OnInit } from "@angular/core";
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
    }[] = [];
  ;
  constructor(public _services: DataService) {
    this.students = _services.readStudentList();
  }

  ngOnInit() {}

  updateStudentCoursesById(id: string, courses: Array<any>){
    console.log(this.courses);
    this._services.updateStudentCoursesById(id, courses);
  }

  getCoursesByStudetn(id: string){
    this.actualStudent = id;
    this.courses = this._services.getCoursesByStudent(id);
    console.log(this.courses);
  }
}
