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
      link: 'https://indu-e-commerce-1-0.onrender.com',
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
      link: 'https://sixwcserver-wd-303-indu-e-commerce-1.onrender.com',
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
    {
      name: 'Heart of Paws',
      imgUrl: '/images/screenshots/heart-of-paws.jpg',
      desc: 'Served as the backend developer and integrated the functionality in the frontend to build an animal adoption app using the MEAN stack.',
      technologies: ['MongoDB', 'Express', 'NodeJS', 'Angular'],
      link: 'https://sixwcserver-wd-303-indu-e-commerce-1.onrender.com',
      repoLink:
        'https://github.com/Heart-of-Paws-Tarlac-Project/Heart-of-Paws-Tarlac-Web-Application.git',
      date: 'March 2025',
      role: 'Backend Developer | Front-Developer (Integration)',
      firstFeatureTitle: 'Appointment Scheduling',
      firstFeatureDescription:
        'Dynamic appointment scheduling and tracking, ensuring efficient scheduling of appointments of users by only displaying dates that are not fully booked and schedules that are not taken by other applicants.',
      firstFeatureScreenshot: '/images/screenshots/appointment-creation.jpg',
      secondFeatureTitle:
        'Applicant live search and filtering of applications by status',
      secondFeatureDescription:
        "Implemented a live search functionality in the admin dashboard, allowing applications to be quickly accessed by searching for an applicant's name. Additionally, added a filter to sort applications based on their status for better organization and efficiency.",
      secondFeatureScreenshot: '/images/screenshots/live-search-applicants.png',
      thirdFeatureTitle: 'Email Verification',
      thirdFeatureDescription:
        'Implemented an email verification system to enhance account security and ensure valid registrations. During sign-up, user-provided email addresses are first validated to confirm they are legitimate. Upon successful registration, a verification email is sent to the given address containing a unique link. Users must click this link to activate their accounts before they can log in, preventing fake or unauthorized registrations.',
      thirdFeatureScreenshot: '/images/screenshots/email-verification.jpg',
      fourthFeatureTitle: 'Basic User Profile Management',
      fourthFeatureDescription:
        'Implemented a basic user profile management functionality wherein users can change their profile picture to further enhance their credibility and identity in their applications.',
      fourthFeatureScreenshot: '/images/screenshots/user-profile.jpg',
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

  testimonials: any[] = [
    {
      name: 'John Gabriel Perez',
      role: 'Collaborator | Front End Developer Heart of Paws Project',
      message:
        'Efficient and proactive! Not only were the required functionalities implemented in a short period of time, but he also consistently looks for ways to enhance the project by identifying and adding valuable features.',
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

  getTestimonials(): any[] {
    return this.testimonials;
  }
}
