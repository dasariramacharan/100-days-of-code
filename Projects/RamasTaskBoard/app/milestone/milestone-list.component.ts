import{Component,OnInit} from '@angular/core'

import { MilestoneService } from '../models/milestone.service'
import { Milestone} from '../models/milestone.model'

@Component({
  moduleId: module.id,
  selector: 'my-milestone-list',
  templateUrl:'./milestone-list.component.html'  
})
export class MilestoneListComponent implements OnInit{

  milestones: Promise<Milestone[]>;

  constructor(private milestoneService: MilestoneService) { }

  ngOnInit() {
    this.milestones = this.milestoneService.getMilestones();
  }

}