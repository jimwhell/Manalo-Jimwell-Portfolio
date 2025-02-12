import { Component, Input } from '@angular/core';
import { Technology } from '../../technology';
import { CommonModule } from '@angular/common';
import { Contact } from '../../contact';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  @Input() mode: 'technology' | 'contact' = 'technology';
  @Input() technology?: Technology;
  @Input() contact?: Contact;

  navigateToContact() {
    if (this.contact && this.contact.link) {
      window.open(this.contact.link, '_blank');
    }
  }
}
