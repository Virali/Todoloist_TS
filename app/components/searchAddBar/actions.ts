const ADD = 'ADD';

export interface IActionBasic<T> {
   type: string,
   payload: T
}

export function addTodo(text:string):IActionBasic<string> {
   return {
      type: ADD,
      payload: text
   }
}