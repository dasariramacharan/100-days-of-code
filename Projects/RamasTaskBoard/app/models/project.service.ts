import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { Project } from './project.model';

@Injectable()
export class ProjectService{
  
  constructor(private http:Http){}
  
  getProjects(projectId: number){
    return this.http
          .get('api/projects.json')
          .map((response: Response) => response.json().data);
    
  }
}
