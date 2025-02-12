import { Component } from '@angular/core';
import { InfoBlockComponent } from '../../components/info-block/info-block.component';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';
import { CommonModule } from '@angular/common';
import { Technology } from '../../technology';
import { ProjectsService } from '../../projects.service';
import { inject } from '@angular/core';
import { Certificate } from '../../certificate';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InfoBlockComponent, CommonModule, SkillCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  profileSections = [
    {
      imgUrl: '/images/code.jpg',
      altText: 'Code symbol',
      description:
        'I am Jimwell Manalo, a third-year web development student. Throughout my studies, which consisted of building simple websites with HTML5 and CSS to developing web applications using various frameworks and backend technologies, I have developed a keen interest in backend development, which I continue to explore and refine.',
    },
    {
      imgUrl: '/images/graduation-hat.jpg',
      altText: 'Graduation hat',
      description:
        'Through my previous coursework, I have gained experience in developing applications using web technologies such as JavaScript, Node.js, Express, and MongoDB. I have worked on implementing RESTful APIs and creating server-side logic to support the functionality of our web application outputs.',
    },
    {
      imgUrl: '/images/continuous-learning.jpg',
      altText: 'Code symbol',
      description:
        'In addition to backend development, I actively explore front-end development to enhance my versatility as a developer. I refine my CSS skills by creating mock website layouts and implementing design concepts that capture my interest. Furthermore, I am currently learning frameworks like Angular, enabling me to develop interactive and dynamic user interfaces that complement backend functionality',
    },
  ];

  technologies: Technology[] = [];
  certifications: Certificate[] = [];

  projectsService: ProjectsService = inject(ProjectsService);

  constructor() {
    this.technologies = this.projectsService.getTechnologies();
    this.certifications = this.projectsService.getCertifications();
  }
}
