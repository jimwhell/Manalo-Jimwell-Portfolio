import { Component, inject } from '@angular/core';
import { Inject } from '@angular/core';
import { Project } from '../../project';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projectList: Project[] = [];

  projectsService: ProjectsService = inject(ProjectsService);

  constructor() {
    this.projectList = this.projectsService.getProjects();
  }
}
