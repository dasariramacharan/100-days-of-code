import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { CONFIG } from '../config';
let tasksUrl = CONFIG.baseUrls.tasks;

import { Task } from './task.model';

@Injectable()
export class TaskService{
  
  constructor(private http:Http){}

  getAllTasks() {
    return this.http
      .get(tasksUrl)
      .map((response: Response) => <Task[]>response.json().data);
  }

  getTask(id: number) {
    return this.getAllTasks()
      .map(tasks => tasks.find(task => task.id === id));
  }

  getTasks(projectId: number){
    return this.http
      .get(tasksUrl)
          .map((response: Response) => response.json().data);
    
  }

}
