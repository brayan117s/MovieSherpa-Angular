import { Component } from '@angular/core';
import { getSuggestedMovie } from './scripts/movie-sherpa';
import { interactuar } from './scripts/social-networks.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieSherpa-Angular';
}