import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from 'src/model/IStudent';


@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private http: HttpClient) { }

  students: IStudent[] = [];
  //apiUrl = 'https://api.hatchways.io/assessment/students';
  apiUrl = environment.apiUrl;
  
  getStudents() {
    return this.http.get<any>(this.apiUrl)
  }

  findUserName(name: string){
      return this.http.post<any>(this.apiUrl, { name });  
  }
}
