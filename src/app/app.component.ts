import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_Dev';
}
