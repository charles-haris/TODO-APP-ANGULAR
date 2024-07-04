import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() {
    //this will first load the getTask function by the constructor
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

  completeTask(index:number, task:any ){

      this.tasks[index] = task;
      localStorage.setItem(this.key,JSON.stringify (this.tasks))

  }

  deleteTask(index:number){

      this.tasks.splice(index,1)
      localStorage.setItem(this.key,JSON.stringify (this.tasks))


  }
}
