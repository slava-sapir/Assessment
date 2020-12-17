import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { IStudent } from 'src/model/IStudent';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private studentService:StudentService) {}

   students: IStudent[] = [];
   
   onSubmitted(students: any) {
     this.students = students;
   }

   searchName: string = '';
   searchTag: string = '';

   ngOnInit(){
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe( response => {
      this.students = Object.values(response['students']);
      this.students[0]['tag'] = [];
    }, error => {
      console.log(error);
    });
  }

}

 



