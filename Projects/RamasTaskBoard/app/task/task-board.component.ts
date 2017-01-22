import { Component } from '@angular/core';
import { Task } from '../models/task.model' ;

@Component({
  moduleId: module.id,
  selector: 'my-task-board',
  templateUrl: 'task-board.component.html',
  styleUrls: ['../../styles.css']
})
export class TaskBoardComponent {
  userName = 'Rama';
  currentTask :Task;
  
  onTaskStarted(task:Task){
    this.currentTask = task;
  }
  
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/