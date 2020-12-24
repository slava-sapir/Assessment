import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { IStudent } from 'src/model/IStudent';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  
  @Input() student!: IStudent;
  @ViewChild('search', { static: false }) searchTerm?: ElementRef;
  @Output() submitted = new EventEmitter<IStudent>();
  testsShow: boolean = true;
 
  constructor() { }

  ngOnInit(): void {
  }

  getAvg(grades: []){
    let sum = 0;
    for( let i = 0; i < grades.length; i++ ){
    sum += parseInt( grades[i], 10 ); 
   }
   return sum/grades.length 
  }

  getTests(){
    this.testsShow = !this.testsShow
  }

  
  addTag() {
    if(this.student.tag) {
      this.student.tag.push((this.searchTerm?.nativeElement.value).trim());
    } else {
      this.student.tag = [];
      this.student.tag.push((this.searchTerm?.nativeElement.value).trim());
    }
    this.submitted.emit(this.student)
  }


}
