import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class NavComponent {
  constructor(private readonly route : Router){}
  modules = [
    { name: 'Dashboard', path: '/' },
    { name: 'Add Record', path: '/add-record' },
    { name: 'Form Management', path: '/form-management' },
    { name: 'About', path: '/about' }
  ]
}
