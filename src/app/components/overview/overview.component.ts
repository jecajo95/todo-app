import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  tasks: Task[] = [];
  taskChosen: Task | undefined;
  showAll: boolean = false;

  constructor(private readonly tasksService: SharedService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
    this.tasks.sort((a, b) => a.name.localeCompare(b.name));
  }

  deleteTask(taskToDelete: Task) {
    this.tasksService.deleteTask(taskToDelete);
    this.taskChosen = undefined;
    this.tasks = this.tasksService.tasks;
  }

  finishTask(taskFinished: Task) {
    this.tasksService.finishTask(taskFinished, true);
    this.taskChosen = undefined;
  }

  isDateInPast(dueDate: Date): boolean {
    if (
      dueDate.getFullYear() === new Date().getFullYear() &&
      dueDate.getMonth() === new Date().getMonth() &&
      dueDate.getDate() === new Date().getDate()
    ) {
      return false;
    }

    let dateVal: number = dueDate.getTime();
    let today: number = Date.now();

    if (dateVal < today) {
      return true;
    }

    return false;
  }

  setTaskChosen(task: Task) {
    this.taskChosen = task;
  }

  toBeFinished(taskIsNotFinished: Task) {
    this.tasksService.finishTask(taskIsNotFinished, false);
    this.taskChosen = undefined;
  }
}
