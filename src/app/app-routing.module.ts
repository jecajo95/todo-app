import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ReadmeComponent } from './components/readme/readme.component';

const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'readme', component: ReadmeComponent },
  { path: '**', redirectTo: 'readme', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
