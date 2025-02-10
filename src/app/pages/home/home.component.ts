import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  mainHeading: string = 'Jimwell Manalo';
  secondaryHeading: string = 'Backend Developer';
  tagline: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
  projectsHeading: string = 'Projects';
}
