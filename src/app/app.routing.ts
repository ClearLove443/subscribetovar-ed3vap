import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChildAComponent} from './child-a/child-a.component';
import {ChildBComponent} from './child-b/child-b.component';

const routes: Routes = [
  {
    path: '',
    component: ChildAComponent
  },
  {
    path: 'A',
    component: ChildAComponent
  },
  {
    path: 'B',
    component: ChildBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
