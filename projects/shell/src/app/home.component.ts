import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <h2>Home</h2>
    <p>Open Flights to load the mfe1 component from the remote application.</p>
    <a routerLink="/flights">Open Flights</a>
  `,
})
export class HomeComponent {}
