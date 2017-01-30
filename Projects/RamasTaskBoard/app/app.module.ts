import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

import { AppComponent } from './app.component'
import { TaskBoardComponent } from './task/task-board.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list.component';
import { TaskService } from './models/task.service';
import { ProjectBoardComponent } from './project/project-board.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list.component';
import { ProjectService } from './models/project.service';

@NgModule({
  imports: [BrowserModule,HttpModule],
  declarations: [
    AppComponent,
    TaskBoardComponent,
    TaskComponent,
    TaskListComponent,
    ProjectBoardComponent,
    ProjectComponent,
    ProjectListComponent],
  bootstrap: [AppComponent],
  providers: [TaskService, ProjectService]
})
export class AppModule { }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/