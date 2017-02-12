import { ProjectService } from './models/project.service';
import { TaskService } from './models/task.service';
import { MilestoneService } from './models/milestone.service';

export const serviceComponents = [
  ProjectService,
  TaskService,
  MilestoneService
];