import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module'; // your route configuration



bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
  ]
}).catch(err => console.error(err));