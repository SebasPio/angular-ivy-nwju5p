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
  actualAverage: [
    totalCourses: number,
    approveQuant: number,
    notApproveQuant: number,
    approveAverage: number,
    notApproveAverage: number,
    totalAverage: number
   ] = [0,0,0,0,0,0];
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
    this.hideAverages();
    document.getElementById("coursesDisplay").style.display = "";
    this.actualStudent = id;
    this.courses = this._services.getCoursesByStudent(id);
    const averages = this._services.getAverage(this.courses);
    this.actualAverage[0]= averages[0];
    this.actualAverage[1]= averages[1];
    this.actualAverage[2]= averages[2];
    this.actualAverage[3]= averages[3];
    this.actualAverage[4]= averages[4];
    this.actualAverage[5]= averages[5];
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

  getAverages() {
    if(
    document.getElementById("averageTable").style.display == "none"){
    document.getElementById("averageTable").style.display = "";
    document.getElementById("averageButton").textContent = "Ocultar estadísticas";
    }
    else{
    document.getElementById("averageButton").textContent = "Obtener estadísticas";
    document.getElementById("averageTable").style.display = "none";
    }
  }

  hideAverages(){
    document.getElementById("averageTable").style.display = "none";
  }
}
