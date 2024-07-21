import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsViewComponent } from './details-view/details-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'app-details-view', component: DetailsViewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
