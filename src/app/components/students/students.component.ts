import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../services/data.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  constructor(_services: DataService) {
    console.log(_services.readStudentList());
    this.students = _services.readStudentList();
  }

  ngOnInit() {}

  getStudentById(id: string){
    console.log(id);
  }
}
