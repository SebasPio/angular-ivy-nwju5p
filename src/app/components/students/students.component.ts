import { AnalysisOutput } from "@angular/compiler-cli/src/ngtsc/transform";
import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../services/data.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  courses: any[] = [];
  constructor(public _services: DataService) {
    console.log(_services.readStudentList());
    this.students = _services.readStudentList();
  }

  ngOnInit() {}

  getCoursesByStudetn(id: string){
    this.courses = this._services.getCoursesByStudent(id);
    console.log(this.courses);
  }
}
