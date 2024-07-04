import { Component , inject , OnInit} from '@angular/core';
import { TaskServiceService } from './task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo-App';
  task_service = inject(TaskServiceService);
  tasks_existing:any
  ngOnInit() {
    this.show_task();
  }

  show_task(){
     this.tasks_existing = this.task_service.getTask();
  }

  create_task(task_name:any){
    const task ={
      name: task_name.value,
      status: false
    }
    this.task_service.addTask(task)
    this.show_task();
  }
}
