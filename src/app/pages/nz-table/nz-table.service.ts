import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NzTableService {

  constructor(private http: HttpClient) { }

  getFact() {
    return this.http.get(`https://api.publicapis.org/entries`);
  }
}
