import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoList} from "./model/TodoList";
import {TodoItem} from "./model/todo-item";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatBadge} from "@angular/material/badge";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatCard} from "@angular/material/card";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbar, MatIcon, MatBadge, MatTable, MatCard, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatCell, MatCellDef, MatHeaderRow, MatRow, MatRowDef, MatHeaderRowDef, MatCheckbox, FormsModule, MatFormFieldModule, MatInput, MatSuffix, MatButton, MatSlideToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public list: TodoList = new TodoList("Bob", [
    new TodoItem("Go for run", true),
    new TodoItem("Get flowers"),
    new TodoItem("Collect ticket"),
    new TodoItem("Inform assistant"),
    new TodoItem("Configure new laptop")
  ])
  showComplete: boolean = false;

  get itemCount(): number {
    return this.list.items
      .filter(item => item.complete).length;
  }

  get username(): string {
    return this.list.user
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(value: string) {
    if (value === "") return;
    this.list.addItem(value);
  }
}
