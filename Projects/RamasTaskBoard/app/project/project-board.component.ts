import { Component } from '@angular/core';
import { Project } from '../models/project.model' ;

@Component({
  moduleId: module.id,
  selector: 'my-project-board',
  templateUrl: 'project-board.component.html',
  styleUrls: ['../../styles.css']
})
export class ProjectBoardComponent {
  userName = 'Rama';
  currentProject :Project;
  
  onProjectStarted(project:Project){
    this.currentProject = project;
  }
  
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/