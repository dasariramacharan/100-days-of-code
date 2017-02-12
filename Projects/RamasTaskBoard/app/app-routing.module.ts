import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components used for routing
//import { TaskBoardComponent } from './task/task-board.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list.component';
//import { ProjectBoardComponent } from './project/project-board.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project/project-list.component';
import { MilestoneListComponent } from './milestone/milestone-list.component';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'projects', },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskComponent },
  { path: 'milestones', component: MilestoneListComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }

export const routableComponents = [
  ProjectListComponent,
  ProjectComponent,
  TaskListComponent,
  TaskComponent,
  MilestoneListComponent,
  PageNotFoundComponent
];







