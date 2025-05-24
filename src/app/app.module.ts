import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { NavComponent } from './features/nav/nav.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddRecordComponent } from './features/add-record/add-record.component';
import { FormManagementComponent } from './features/form-management/form-management.component';
import { AboutComponent } from './features/about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  
    DashboardComponent,
       AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent,
    HttpClientModule
  ],
  providers: [],
  // Removed bootstrap array as AppComponent is a standalone component
})
export class AppModule { }
