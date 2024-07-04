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
  tasks_existing:any [] = []
  ngOnInit() {
    this.show_task();
  }

  /*
  this function updates the value of the tasks_existing by getting the actual data in the local storage
  */
  show_task(){
     this.tasks_existing = this.task_service.getTask();
  }

   /*
  this function adds the new task to the localStorage and updates the value of the tasks_existing by getting the updated data in the local storage
  */

  create_task(task_name:any){
    const task ={
      name: task_name.value,
      status: false
    }
    this.task_service.addTask(task)
    this.show_task();
  }

  /*
  this function update the status of a task and update the array Tasks_existiong with the updated value
  in the localStorage and updates the value of the tasks_existing by getting the updated data in the local storage
  */
  completeTask(index:number){
    const task = this.tasks_existing[index]
    task.status = true

    this.task_service.completeTask(index,task)
    this.show_task();


  }

  deleteTask(index:number){
    this.task_service.deleteTask(index)
    this.show_task();


  }
}
