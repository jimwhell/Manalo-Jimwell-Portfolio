import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';
import { ProjectsService } from '../../projects.service';
import { Contact } from '../../contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, SkillCardComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts: Contact[];

  constructor(private projectService: ProjectsService) {
    this.contacts = this.projectService.getContacts();
  }
}
