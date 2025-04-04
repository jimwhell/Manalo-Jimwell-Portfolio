import { Component, Input } from '@angular/core';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project!: Project;

  constructor(private router: Router) {}

  goToProjectDetail(): void {
    this.router.navigate(['/projects', encodeURIComponent(this.project.name)]);
  }
}
