import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private URL: string = 'http://localhost:3000/records';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.URL);
  }
}
