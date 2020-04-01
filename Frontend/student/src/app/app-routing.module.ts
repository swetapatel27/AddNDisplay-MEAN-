import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayStudentComponent} from './display-student/display-student.component';
import { AddstudComponent} from './addstud/addstud.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'studs', component: DisplayStudentComponent},
  { path: 'addstud', component: AddstudComponent },
  {path:'',redirectTo:"/studs", pathMatch:"full"},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
