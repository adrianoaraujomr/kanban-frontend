import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoCard } from '../shared/models/to-do-card';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToDoCardWS {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<ToDoCard[]> {
    return this.httpClient.get<ToDoCard[]>('http://localhost:5000/to-do-card/');
  }
}
