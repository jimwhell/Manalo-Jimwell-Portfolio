import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule], // ✅ Ensure CommonModule is included
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  project!: Project | undefined;

  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);

  ngOnInit(): void {
    const projectName = this.route.snapshot.paramMap.get('name');

    if (projectName) {
      const decodedName = decodeURIComponent(projectName);

      this.project = this.projectsService.getProjectByName(decodedName);
    }
  }

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
