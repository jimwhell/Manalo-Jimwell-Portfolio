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

  // ✅ Use Angular 18's inject() API
  private route = inject(ActivatedRoute);
  private projectsService = inject(ProjectsService);

  ngOnInit(): void {
    const projectName = this.route.snapshot.paramMap.get('name');
    console.log('🚀 Received project name from URL:', projectName);

    if (projectName) {
      const decodedName = decodeURIComponent(projectName);
      console.log('🔍 Decoded project name:', decodedName);

      this.project = this.projectsService.getProjectByName(decodedName);
      console.log('🎯 Retrieved project:', this.project);
    }
  }

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
