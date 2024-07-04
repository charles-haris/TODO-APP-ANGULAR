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
  /*
    This function allows to:

    -> delete a task in  the array tasks using  the splice function and the index parameter

    -> set the array tasks in the localStorage using the setItem() function that takes
       as parameters a key (this.key) and the tasks array usind the JSON.stringify() function.

      The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally r
      eplacing values if a replacer function is specified or optionally including only the specified
      properties if a replacer array is specified.

       example
       console.log(JSON.stringify({ x: 5, y: 6 }));
        // Expected output: '{"x":5,"y":6}'


  */
  deleteTask(index:number){

      this.tasks.splice(index,1)
      localStorage.setItem(this.key,JSON.stringify (this.tasks))


  }
}
