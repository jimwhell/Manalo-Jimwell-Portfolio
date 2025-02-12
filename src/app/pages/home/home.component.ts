import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule, ProjectCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  projectsList: Project[] = [];
  mainHeading: string = 'Hi, I am Jimwell Manalo, a backend developer.';
  aboutText: string =
    'As a third-year web development student, I am passionate about backend development and constantly striving to expand my skill set. Through my coursework, I have gained hands-on experience with technologies such as Node.js, Express, MongoDB, and Firestore. I have also developed projects leveraging REST APIs, which you can explore below. If I had to choose a personal motto, it would be carpe diem—I firmly believe in making the most out of every day.';
  tagline: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
  projectsHeading: string = 'Featured Works';

  projectsService: ProjectsService = inject(ProjectsService);

  constructor() {
    this.projectsList = this.projectsService.getProjects();
    console.log(this.projectsList);
  }
}
