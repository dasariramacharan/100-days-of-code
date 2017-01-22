import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { TaskBoardComponent } from './task/task-board.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list.component';
import { TaskService } from './models/task.service';

@NgModule({
  imports: [BrowserModule,HttpModule],
  declarations: [
    TaskBoardComponent,
    TaskComponent,
    TaskListComponent,
      ],
  bootstrap: [TaskBoardComponent],
  providers : [TaskService]
})
export class AppModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/