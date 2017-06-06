import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoEditPage } from './todo_edit';

@NgModule({
  declarations: [
    TodoEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoEditPage),
  ],
  exports: [
    TodoEditPage
  ]
})
export class TodoEditPageModule {}
