import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() {
    //this will first load the getTask function by the constructor
    this.getTask()
   }
       /*
       -> declaration of the array tasks to add the different tasks

       -> declaration of the key that we will use in the localStorage

       */

  tasks : any [] = []
  key : string = "tasks"


  /*
  this function allows us to get the task save in the localStorage
  */
  getTask(){

    const my_task = localStorage.getItem(this.key)
    return my_task ? JSON.parse(my_task) : []

  }


  /*
  this function allows to :

    -> add the task in the array tasks using the push() function

    -> set the array tasks in the localStorage using the setItem() function

  */
  addTask(task_data : any){
    this.tasks.push(task_data)

    localStorage.setItem(this.key,JSON.stringify (this.tasks))
  }



  /*
  This function allows to:

    -> update the array tasks using the index parameter

    -> set the array tasks in the localStorage using the setItem() function

  */
  completeTask(index:number, task:any ){

      this.tasks[index] = task;
      localStorage.setItem(this.key,JSON.stringify (this.tasks))

  }

  deleteTask(index:number){

      this.tasks.splice(index,1)
      localStorage.setItem(this.key,JSON.stringify (this.tasks))


  }
}
