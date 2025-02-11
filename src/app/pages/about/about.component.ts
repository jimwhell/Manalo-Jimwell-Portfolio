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
        'I am Jimwell Manalo, a third-year college student pursuing a degree in Web Development. Throughout my studies, I have taken a keen interest in the backend shenanigans of web development.',
    },
    {
      imgUrl: '/images/graduation-hat.jpg',
      altText: 'Graduation hat',
      description:
        'I enjoy solving complex problems and optimizing backend performance using technologies like Node.js, Express, and databases such as MongoDB and MySQL.',
    },
    {
      imgUrl: '/images/continuous-learning.jpg',
      altText: 'Code symbol',
      description:
        'Beyond coding, I constantly explore new technologies and methodologies to improve my backend development expertise, staying up to date with the latest trends.',
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
