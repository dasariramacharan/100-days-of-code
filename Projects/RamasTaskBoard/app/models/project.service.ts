import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Project } from './project.model';

@Injectable()
export class ProjectService{
  
  constructor(private http:Http){}
  
  getProjects(projectId: number){
    return this.http
          .get('api/projects.json')
          .map((response: Response) => response.json().data)
           //.do(data => console.log(`Project Data from Service : ${data}`))
          .do(data => console.log(data))
          .catch(this.handleError);    
  }

  private handleError(error:Response) {
    console.log(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }

}
