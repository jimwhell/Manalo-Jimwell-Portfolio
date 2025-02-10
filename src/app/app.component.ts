import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  RouterLink,
  Router,
  RouterModule,
} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio-manalo-jimwell';
  isScrolled: boolean = false;
  emailAddress: string = 'jimwelllmanalo@gmail.com';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 5) {
      console.log(window.scrollY);
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
