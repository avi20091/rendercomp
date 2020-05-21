import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstAppSharedModule } from 'projects/firstApp/src/app/app.module';
import { SecondAppSharedModule } from 'projects/secondApp/src/app/app.module';

const routes: Routes = [
  {path:"firstApp", loadChildren:"../../projects/firstApp/src/app/app.module#FirstAppSharedModule"},
  {path:"secondApp", loadChildren:"../../projects/secondApp/src/app/app.module#SecondAppSharedModule"},
  { path: '**', redirectTo: '/firstApp/one'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FirstAppSharedModule,
  SecondAppSharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
