import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  styleUrl: './app.component.css',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
