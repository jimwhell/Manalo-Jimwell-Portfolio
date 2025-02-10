import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      name: 'Through the Looking Glass',
      imgUrl: '/images/through-the-looking-glass.jpg',
      desc: 'A creative project exploring different perspectives.',
      technologies: ['HTML5', 'CSS', 'Bootstrap'],
      link: 'https://throughthelookingglasses.netlify.app/',
    },
    {
      name: 'Indu E-Commerce 1.0',
      imgUrl: '/images/addbase.jpg',
      desc: 'A mock-ecommerce website built using Vanillla HTML5, Bootstrap, JavaScript, Express, and Firestore.',
      technologies: [
        'HTML5',
        'Bootstrap',
        'JavaScript',
        'ExpressJS',
        'Firebase',
      ],
      link: 'https://indu-e-commerce.netlify.app',
    },
    {
      name: 'Indu E-Commerce 2.0',
      imgUrl: '/images/indu.jpg',
      desc: 'The Indu Returns. Still a mock-ecommerce application, it is built using the MEVN stack.',
      technologies: ['VueJS', 'Express', 'NodeJS', 'MongoDB'],
      link: 'https://google.com',
    },
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }
}
