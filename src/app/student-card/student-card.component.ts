import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { IStudent } from 'src/model/IStudent';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  
  @Input() student!: IStudent;
  @Input() students: IStudent[] = [];
  @ViewChild('search', { static: false }) searchTerm?: ElementRef;
  @Output() submitted = new EventEmitter<IStudent[]>();
  //grades: number[] =[];
  testsShow: boolean = true;
  tag: string = ''; 
  tags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getAvg(grades: []){
    var sum = 0;
    for( var i = 0; i < grades.length; i++ ){
    sum += parseInt( grades[i], 10 ); 
   }
   return sum/grades.length 
  }

  getTests(){
    this.testsShow = !this.testsShow
  }

  addTag(id: string){
    this.tags.push((this.searchTerm?.nativeElement.value).trim());
    this.students.forEach(el => {
      if(el.id === id){
        if(el.tag){
         el.tag.push((this.searchTerm?.nativeElement.value).trim())
        } else { 
          el.tag = [];
          el.tag.push(this.searchTerm?.nativeElement.value);
        }
      }
    });
    this.submitted.emit(this.students)
  }


}
