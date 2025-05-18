import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddRecordComponent } from './features/add-record/add-record.component';
import { FormManagementComponent } from './features/form-management/form-management.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'add-record',
    component:AddRecordComponent
  },
  {
    path:'form-management',
    component:FormManagementComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
