import { Component } from '@angular/core';
import { ProjectListComponent } from './project/project-list.component';
import { TaskListComponent } from './task/task-list.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: '<my-task-list></my-task-list>'
})
export class AppComponent { };
