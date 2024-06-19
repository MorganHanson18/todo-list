import {HttpClient} from '@angular/common/http'
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient)

  getTodos() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos')
  }

  getTodo(id: string) {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos' + '/' + id)
  }

}
