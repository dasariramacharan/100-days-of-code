import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { Task } from './task.model.ts';

@Injectable()
export class TaskService{
  
  constructor(private http:Http){}
  
  getTasks(projectId: number){
    return this.http
          .get('api/tasks.json')
          .map((response: Response) => response.json().data);
    
  }
}
