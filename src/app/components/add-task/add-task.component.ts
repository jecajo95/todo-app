import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  addTodosForm!: FormGroup;
  waitForResponse = false;

  constructor(
    private router: Router,
    private readonly tasksService: SharedService
  ) {}

  ngOnInit(): void {
    this.addTodosForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', [Validators.required]),
    });
  }

  add() {
    this.waitForResponse = true;
    const name = this.addTodosForm.value.name;
    const date = new Date(this.addTodosForm.value.dueDate);
    this.tasksService.tasks.push({
      name: name,
      dueDate: date,
      isFinished: false,
    });
    this.router.navigate(['/overview']);
  }
}
