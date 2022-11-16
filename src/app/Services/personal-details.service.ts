import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

  baseUrl="http://localhost:3000/personalDetails";
  CustomerName=new BehaviorSubject<string>('');
  // checked=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { }

  addPersonalInfo(personalInfo:any){
    return this.http.post("http://localhost:3000/personalDetails",personalInfo)

  }

  getAllPersonalInfo()
{
  return this.http.get("http://localhost:3000/personalDetails")
}

deleteUser(CustomerName:any){
  return this.http.delete("http://localhost:3000/personalDetails/"+CustomerName)
}
}
