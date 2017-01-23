import { Component, Input } from '@angular/core';
import {Task} from '../models/task.model'

@Component({
  moduleId: module.id,
  selector: 'my-task',
  templateUrl: 'task.component.html'
})
export class TaskComponent {
  @Input() task : Task;
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/