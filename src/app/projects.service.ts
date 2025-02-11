import { Injectable } from '@angular/core';
import { Project } from './project';
import { Technology } from './technology';
import { Certificate } from './certificate';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      name: 'Through the Looking Glass',
      imgUrl: '/images/through-the-looking-glass.jpg',
      desc: 'The Indu Returns. Still a mock-ecommerce application, it is built using the MEVN stack.',
      technologies: ['HTML5', 'CSS', 'Bootstrap'],
      link: 'https://throughthelookingglasses.netlify.app/',
      repoLink: 'https://throughthelookingglasses.netlify.app/',
    },
    {
      name: 'Indu E-Commerce 1.0',
      imgUrl: '/images/addbase.jpg',
      desc: 'A mock-ecommerce website built using Vanillla HTML5, Bootstrap, JavaScript, Express, and Firestore.',
      technologies: ['HTML5', 'Bootstrap', 'ExpressJS', 'Firebase'],
      link: 'https://indu-e-commerce.netlify.app',
      repoLink: 'https://throughthelookingglasses.netlify.app/',
    },
    {
      name: 'Indu E-Commerce 2.0',
      imgUrl: '/images/indu.jpg',
      desc: 'The Indu Returns. Still a mock-ecommerce application, it is built using the MEVN stack.',
      technologies: ['VueJS', 'Express', 'NodeJS', 'MongoDB'],
      link: 'https://google.com',
      repoLink: 'https://throughthelookingglasses.netlify.app/',
    },
  ];

  technologies: Technology[] = [
    {
      name: 'HTML5',
      icon: '/images/html.jpg',
      description:
        'Full understanding and experience in the best practices of HTML.',
    },
    {
      name: 'CSS',
      icon: '/images/css.jpg',
      description:
        'Mastered the basics of CSS in order to create beautiful UI elements.',
    },
    {
      name: 'JavaScript',
      icon: '/images/javascript.jpg',
      description: 'Experience using JavaScript in both frontend & backend.',
    },

    {
      name: 'Node',
      icon: '/images/node.jpg',
      description:
        'Knowledge in leveraging Node.js to build server-side applications.',
    },
    {
      name: 'MongoDB',
      icon: 'images/mongodb.jpg',
      description: 'Experience with NoSQL databases like MongoDB.',
    },
  ];

  certifications: Certificate[] = [
    {
      name: 'Cisco Cybersecurity Essentials',
      imgUrl: 'images/cybersec-essentials.jpg',
      provider: 'Cisco Networking Academy',
      date: 'March 2023',
      file: 'documents/cisco-cybersec-essentials-certification.pdf',
    },
    {
      name: 'FreeCodeCamp JavaScript Algorithms',
      imgUrl: 'images/javascript-essentials.jpg',
      provider: 'FreeCodeCamp',
      date: 'June 2022',
      file: 'documents/fcc-javascript-algorithms-certification.pdf',
    },
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getTechnologies(): Technology[] {
    return this.technologies;
  }

  getCertifications(): Certificate[] {
    return this.certifications;
  }
}
