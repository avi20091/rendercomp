import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';


const routes: Routes = [
  {path:'firstApp/one', component:View1Component},
  {path:'firstApp/two', component:View2Component},
  {path:'firstApp', redirectTo: 'firstApp/one'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
