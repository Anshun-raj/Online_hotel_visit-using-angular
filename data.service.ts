import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}
  getData()
  {
    let url="https://jsonplaceholder.typicode.com/comments";
    return this.http.get(url);
  }
}
