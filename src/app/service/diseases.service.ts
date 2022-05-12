import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiseasesService {

  constructor(private http:HttpClient) { }

  public View(): Observable<any>{
    let view='http://localhost:8801/api/disease/viewall';
   return this.http.get<any>(view)

  }
  public search(keyword:string): Observable<any>{
    let Search='http://localhost:8801/api/disease/search-disease'
   return this.http.post<any>(Search,{keyword})
  }
}
