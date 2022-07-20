import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() dismiss = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<Task>();
  @Output() isFinished = new EventEmitter<Task>();
  @Output() isNotFinished = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.dismiss.emit(true);
  }

  deleteTask() {
    this.delete.emit(this.task);
  }

  finishTask() {
    this.isFinished.emit(this.task);
  }

  toBeFinished() {
    this.isNotFinished.emit(this.task);
  }
}
