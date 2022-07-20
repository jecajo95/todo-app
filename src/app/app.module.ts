import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    AddTaskComponent,
    DetailViewComponent,
    ReadmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
