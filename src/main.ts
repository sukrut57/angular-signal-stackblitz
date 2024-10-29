import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SnackComponent } from './app/snack/snack.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SnackComponent],
  template: `
   <app-snack></app-snack>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
