import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { IStudent } from 'src/model/IStudent';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  students: IStudent[] = [];
  newStudents: IStudent[] = [];
  student!: IStudent;
  searchByName: string = '';
  searchByTag: string = '';
  name = 'search by name';
  tag = 'search by tag';
  searchString = '';
  searchString2= '';
  constructor(private studentService:StudentService) {}
  
 

   searchName(str: string){
     //solution for third party filter
     this.searchByName = str;
     //solution for custom filter
    // this.students = str ? this.students.filter(s => (s.firstName === str
    //  || s.lastName === str) || (s.firstName + ' ' + s.lastName) === str) : this.newStudents;
    } 

   searchTag(str: string){
     this.searchByTag = str;
    //  this.students = str ? this.students.filter(s => {
    //    return s.tag?.find(el => el === str)}) : this.newStudents;
   }

   onSubmitted(student: any) {
     this.students.forEach(el => {
       if(el.id === student.id) {
          el.tag = student.tag;
       }
     });
   }

   ngOnInit(){
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe( response => {
      this.students = Object.values(response['students']);
      this.students[0]['tag'] = [];
      this.newStudents = this.students;
    }, error => {
      console.log(error);
    });
  }

  
}
