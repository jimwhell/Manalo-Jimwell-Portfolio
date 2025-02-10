import { Component, Input } from '@angular/core';
import { Project } from '../../project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() project!: Project;

  getLink() {
    window.open(this.project.link, '_blank');
  }
}
