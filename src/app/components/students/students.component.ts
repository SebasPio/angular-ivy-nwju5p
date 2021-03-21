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
  actualStudent: string = "";
  students: any[] = [];
  courses: {
    courseName: string;
    courseQualy: number;
  }[] = [];

  constructor(public _services: DataService) {
    this.students = _services.readStudentList();
  }

  ngOnInit() {
    this.students = this._services.readStudentList();
  }

  updateStudentCoursesById(student: string, courses: any[]) {}

  getCoursesByStudetn(id: string) {
    document.getElementById("coursesDisplay").style.display = "";
    this.actualStudent = id;
    this.courses = this._services.getCoursesByStudent(id);
    this._services.getAverage(this.courses);
  }

  hideCourses() {
    document.getElementById("coursesDisplay").style.display = "none";
  }

  assignNewQualy() {
    console.log(this.courses);
  }

  addStudent() {
    this._services.addStudent(
      (document.getElementById("newStudentId") as HTMLInputElement).value,
      (document.getElementById("newStudentName") as HTMLInputElement).value
    );
    document.getElementById("newStudentForm").style.display = "none";
    (document.getElementById("newStudentId") as HTMLInputElement).value = "";
    (document.getElementById("newStudentName") as HTMLInputElement).value = "";
    this.ngOnInit();
  }

  deleteStudent(id: string) {
    this._services.deleteStudentById(id);
    this.ngOnInit();
  }

  showNewStudent() {
    document.getElementById("newStudentForm").style.display = "";
  }

  hideNewStudent() {
    document.getElementById("newStudentForm").style.display = "none";
  }
}
