import { ProjectService } from './models/project.service';
import { TaskService } from './models/task.service';
import { MilestoneService } from './models/milestone.service';
import {CanActivateAuthGaurd } from './can-activate-service'
import { UserProfileService } from './login/login-profile.service';

export const serviceComponents = [
  ProjectService,
  TaskService,
  MilestoneService,

  CanActivateAuthGaurd,
  UserProfileService

];