import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'about', component: AboutComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
