import { Injectable } from '@angular/core';
import { Task } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  tasks: Task[] = [];

  constructor() {}

  deleteTask(taskToDelete: Task) {
    this.tasks = this.tasks.filter((task) => taskToDelete.name !== task.name);
  }

  finishTask(taskFinished: Task, isFinished: boolean) {
    const index = this.tasks.findIndex(
      (task) => taskFinished.name === task.name
    );
    this.tasks[index].isFinished = isFinished;
  }
}
