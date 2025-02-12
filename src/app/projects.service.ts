import { Injectable } from '@angular/core';
import { Project } from './project';
import { Technology } from './technology';
import { Certificate } from './certificate';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      name: 'Through the Looking Glass',
      imgUrl: '/images/through-the-looking-glass.jpg',
      desc: 'Designed a landing page and login page layout for a conceptual gallery website.',
      technologies: ['HTML5', 'CSS'],
      link: 'https://throughthelookingglasses.netlify.app/',
      repoLink: 'https://github.com/jimwhell/CloudComp-Landing-Page.git',
      date: 'December 2024',
      role: 'Frontend Developer',
      firstFeatureTitle: 'Landing Page',
      firstFeatureDescription:
        'A two-column, minimalistic layout for featuring historical photos.',
      firstFeatureScreenshot: '/images/screenshots/landing-page-ttlg.jpg',
      secondFeatureTitle: 'Second Feature',
      secondFeatureDescription:
        "A login page designed to complement the site's minimalistic theme.",
      secondFeatureScreenshot: '/images/screenshots/login-page-ttlg.jpg',
    },
    {
      name: 'Ammunation Firearms',
      imgUrl: '/images/ammunation-firearms.jpg',
      desc: 'As part of a course requirement, I developed a project for a conceptual gun store using Angular and Bootstrap.',
      technologies: ['AngularJS', 'Bootstrap'],
      link: 'https://ammunationfirearms.netlify.app/',
      repoLink: 'https://github.com/jimwhell/Ammunation.git',
      date: 'December 2024',
      role: 'Frontend Developer',
      firstFeatureTitle: 'Landing Page',
      firstFeatureDescription:
        'A clean, minimalist layout designed with Bootstrap to highlight product visibility for a conceptual e-commerce store.',
      firstFeatureScreenshot:
        '/images/screenshots/ammunation-firearms-landing.jpg',
      secondFeatureTitle: 'Product Page',
      secondFeatureDescription:
        'Designed a product card layout using Flexbox for a structured and responsive display.',
      secondFeatureScreenshot:
        '/images/screenshots/ammunation-firearms-products.jpg',
    },
    {
      name: 'Indu E-Commerce 1.0',
      imgUrl: '/images/addbase.jpg',
      desc: 'Worked with a team of 6 members to build a mock e-commerce website built using Vanilla HTML5, Bootstrap, JavaScript, Express, and Firestore.',
      technologies: ['HTML5', 'Bootstrap', 'ExpressJS', 'Firebase', 'NodeJS'],
      link: 'https://indu-e-commerce.netlify.app',
      repoLink: 'https://github.com/jimwhell/INDU-E-Commerce-Addbase.git',
      date: 'October 2024',
      role: 'Backend Developer',
      firstFeatureTitle: 'Product Filter',
      firstFeatureDescription:
        'Basic product filter that allows for the filtering of displayed products by their category.',
      firstFeatureScreenshot: 'images/screenshots/category-filter-addbase.jpg',
      secondFeatureTitle: 'Admin Dashboard',
      secondFeatureDescription:
        'Features an admin dashboard allowing for creation and removal of products from the database.',
      secondFeatureScreenshot:
        '/images/screenshots/admin-functionality-screenshot-server.jpg',
    },
    {
      name: 'Indu E-Commerce 2.0',
      imgUrl: '/images/indu.jpg',
      desc: 'Served as the backend developer to create another mock e-commerce application developed collaboratively by a team of six using the MEVN stack. ',
      technologies: ['VueJS', 'Express', 'NodeJS', 'MongoDB'],
      link: 'https://google.com',
      repoLink:
        'https://github.com/WCSERVER-Group-3/6WCSERVER-WD-303-INDU-E-Commerce.git',
      date: 'October 2024',
      role: 'Backend Developer ',
      firstFeatureTitle: 'Cart Functionality',
      firstFeatureDescription:
        'Implemented a cart functionality which allows for the retrieval, creation, and deletion of cart data from the products listed in the database.',
      firstFeatureScreenshot:
        '/images/screenshots/cart-functionality-screenshot-server.jpg',
      secondFeatureTitle: 'Mock Order Creation',
      secondFeatureDescription:
        "Implemented a mock order creation functionality which retrieves items from a user's cart. This also allows for the retrieval of the order history of an user.",
      secondFeatureScreenshot:
        '/images/screenshots/order-creation-screenshot-server.jpg',
    },
  ];

  technologies: Technology[] = [
    {
      name: 'HTML5',
      icon: '/images/html.jpg',
      description:
        'Understanding and experience in implementing HTML to build the structure of web pages',
    },
    {
      name: 'CSS',
      icon: '/images/css.jpg',
      description:
        'Have a strong understanding of CSS basics and its application in creating UI elements.',
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
        'Knowledge and experience in utilizing Node.js to build server-side applications.',
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

  contact: Contact[] = [
    {
      imgUrl: 'icons/github.svg',
      name: 'Github',
      description: 'Jimwhell',
      link: 'https://github.com/jimwhell',
    },
    {
      imgUrl: 'icons/linked-in.svg',
      name: 'LinkedIn',
      description: 'Jimwell Manalo',
      link: 'https://www.linkedin.com/in/jimwell-manalo  ',
    },
    {
      imgUrl: 'icons/mail-logo.svg',
      name: 'Email',
      description: 'jimwelllmanalo@gmail.com',
      link: 'mailto:jimwelllmanalo@gmail.com',
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

  getContacts(): Contact[] {
    return this.contact;
  }
}
