import { Component,Output,EventEmitter,Input,OnInit } from '@angular/core';

import {Task} from '../models/task.model'
import {TaskService } from '../models/task.service'

@Component({
  moduleId: module.id,
  selector: 'my-task-list',
  templateUrl: 'task-list.component.html',
  styleUrls:[`./task-list.component.css`]
})
export class TaskListComponent implements OnInit {
  
  @Output() taskStarted = new EventEmitter<Task>();
  @Input() projectId: number;
  
   selectedTask :Task;
   tasks : Task[] ;
    
    constructor(private taskService:TaskService){} 
    
    ngOnInit(){
      this.taskService.getTasks(this.projectId)
           .subscribe(tasks => this.tasks = tasks);
           console.log(this.tasks);
    }
      
    select( task: Task) {
      this.selectedTask = task;
    }
    
    startTask() {
      this.taskStarted.emit(this.selectedTask);
    };
}
