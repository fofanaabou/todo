import {TodoItem} from "./todo-item";

export class TodoList {

  user: string;
  items: TodoItem[]
  constructor(user: string, todoItems: TodoItem[]) {
    this.user = user;
    this.items = todoItems
  }

  addItem(task: string) {
    return this.items.push(new TodoItem(task))
  }

}
