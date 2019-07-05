import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'admin', pathMatch: 'full', redirectTo: '/admin/dashboard' },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
