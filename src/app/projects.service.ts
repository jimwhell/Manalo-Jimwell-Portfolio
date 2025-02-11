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
      desc: 'A visually immersive mock e-commerce application built using the MEVN stack.',
      technologies: ['HTML5', 'CSS', 'Bootstrap'],
      link: 'https://throughthelookingglasses.netlify.app/',
      repoLink: 'https://github.com/user/through-the-looking-glass',
      date: 'December 2023',
      role: 'Full Stack Developer',
      firstFeatureTitle: 'First Feature',
      firstFeatureDescription:
        'This feature allows users to explore products with an interactive 3D view.',
      firstFeatureScreenshot: '/images/screenshot1.jpg',
      secondFeatureTitle: 'Second Feature',
      secondFeatureDescription:
        'A seamless and secure checkout process with multiple payment integrations.',
      secondFeatureScreenshot: '/images/screenshot2.jpg',
    },
    {
      name: 'Indu E-Commerce 1.0',
      imgUrl: '/images/addbase.jpg',
      desc: 'A mock e-commerce website built using Vanilla HTML5, Bootstrap, JavaScript, Express, and Firestore.',
      technologies: ['HTML5', 'Bootstrap', 'ExpressJS', 'Firebase'],
      link: 'https://indu-e-commerce.netlify.app',
      repoLink: 'https://github.com/user/indu-e-commerce-1.0',
      date: 'September 2022',
      role: 'Frontend Developer',
      firstFeatureTitle: 'First Feature',
      firstFeatureDescription:
        'Basic cart functionality that allows users to add and remove items.',
      firstFeatureScreenshot: '/images/screenshot1.jpg',
      secondFeatureTitle: 'Second Feature',
      secondFeatureDescription:
        'Firestore integration for real-time updates on product stock.',
      secondFeatureScreenshot: '/images/screenshot2.jpg',
    },
    {
      name: 'Indu E-Commerce 2.0',
      imgUrl: '/images/indu.jpg',
      desc: 'The Indu Returns. Still a mock e-commerce application, now built using the MEVN stack.',
      technologies: ['VueJS', 'Express', 'NodeJS', 'MongoDB'],
      link: 'https://google.com',
      repoLink: 'https://github.com/user/indu-e-commerce-2.0',
      date: 'June 2023',
      role: 'Full Stack Developer',
      firstFeatureTitle: 'First Feature',
      firstFeatureDescription:
        'Improved cart functionality with live product updates.',
      firstFeatureScreenshot:
        '/images/screenshots/cart-functionality-screenshot-server.jpg',
      secondFeatureTitle: 'Second Feature',
      secondFeatureDescription:
        'A modern, responsive UI with enhanced product filtering and sorting.',
      secondFeatureScreenshot:
        '/images/screenshots/order-creation-screenshot-server.jpg',
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

  getProjectByName(name: string): Project | undefined {
    return this.projects.find((project) => project.name === name);
  }
}
