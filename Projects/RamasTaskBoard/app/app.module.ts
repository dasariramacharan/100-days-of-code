import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //This gives our application access to all of the template-driven forms features, including ngModel.
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

import { AppComponent } from './app.component'
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { serviceComponents } from './app-services'
import { MilestoneResolver } from './milestone/shared/milestone-resolver.service';//TODO:move it milestone feature when implemented



@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [ AppComponent, routableComponents],
  providers: [
    serviceComponents,MilestoneResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
