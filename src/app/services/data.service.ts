import { Injectable } from "@angular/core";

interface course {
  courseName: string;
  courseQualy: number;
}

interface student {
  studentId: string;
  studentName: string;
  studentCourses: Array<course>;
  isActive: boolean;
}

@Injectable()
export class DataService {
  public studentsList: Array<student> = [];
  constructor() {
    this.studentsList.push({
      studentId: "20213030",
      studentName: "Sebastian Pioquinto",
      isActive: true,
      studentCourses: [
        {
          courseName: "Matematicas",
          courseQualy: 6.5
        },
        {
          courseName: "Historia",
          courseQualy: 4.2
        }
      ]
    });
    this.studentsList.push({
      studentId: "20213031",
      studentName: "Jesus Cruz",
      isActive: true,
      studentCourses: [
        {
          courseName: "Matematicas",
          courseQualy: 7.5
        },
        {
          courseName: "Historia",
          courseQualy: 8.5
        }
      ]
    });
  }

  readStudentList() {
    return this.studentsList.filter(x => x.isActive);
  }

  getCoursesByStudent(id: string) {
    return this.studentsList.find(x => x.studentId == id).studentCourses;
  }

  updateStudentCoursesById(id: string, newData: Array<course>) {
    this.studentsList.find(x => x.studentId == id).studentCourses = newData;
  }

  deleteStudentById(id: string) {
    this.studentsList.find(x => x.studentId == id).isActive = false;
  }

  getAverage(courses: Array<course>) {
    let totalQualy = 0;
    const totalCourses = courses.length;
    let totalAverage = 0;
    let approveAverage = 0;
    let notApproveAverage = 0;
    let approveQuant = 0;
    let notApproveQuant = 0;

    courses.forEach(x => {
      if (x.courseQualy >= 6) {
        approveQuant++;
        totalQualy = totalQualy + x.courseQualy;
      }
    });
    notApproveQuant = totalCourses - approveQuant;
    approveAverage = totalQualy / approveQuant;
    totalQualy = 0;
    courses.forEach(x => (totalQualy = totalQualy + x.courseQualy));
    totalAverage = totalQualy / totalCourses;
    totalQualy = 0;
    courses.forEach(x => {
      if (x.courseQualy < 6) {
        totalQualy = totalQualy + x.courseQualy;
      }
    });
    notApproveAverage = totalQualy / notApproveQuant;
    return [
      totalCourses,
      approveQuant,
      notApproveQuant,
      approveAverage,
      notApproveAverage,
      totalAverage
    ];
  }

  addStudent(id: string, name: string) {
    this.studentsList.push({
      studentId: id,
      studentName: name,
      isActive: true,
      studentCourses: []
    });
  }
}
