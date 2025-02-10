import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  projectsList: Project[] = [];
  mainHeading: string = 'Jimwell Manalo';
  aboutText: string =
    'As a third-year web development student, I am passionate about backend development and continuously expanding my skills. Through my coursework, I have gained experience with Node.js, Express, MongoDB, MySQL, and Firestore. I have also built projects utilizing REST APIs, which you can explore below. Learning new technologies and improving my backend expertise keeps me motivated and excited to code.';
  tagline: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
  projectsHeading: string = 'Crafts';

  projectsService: ProjectsService = inject(ProjectsService);

  constructor() {
    this.projectsList = this.projectsService.getProjects();
    console.log(this.projectsList);
  }
}
