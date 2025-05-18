import { Component } from '@angular/core';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'Tracker';
}
