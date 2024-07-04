import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() {
    this.getTask()
   }
  tasks : any [] = []
  key : string = "tasks"

  getTask(){

    const my_task = localStorage.getItem(this.key)
    return my_task ? JSON.parse(my_task) : []

  }

  addTask(task_data : any){
    this.tasks.push(task_data)

    localStorage.setItem(this.key,JSON.stringify (this.tasks))
    //console.log("--  data Added without problem --");


  }
}
