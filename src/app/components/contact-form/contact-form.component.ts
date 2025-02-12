import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  form: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  send() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      alert('Please fill in all fields.');
      return;
    }

    emailjs
      .send(
        'service_whicztg',
        'template_bnibr5w',
        {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        },
        '68OZZ4vquJYJFi7Y-'
      )
      .then((response) => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        alert('Error sending message. Please try again later.');
      });
    this.form = {
      name: '',
      email: '',
      message: '',
    };
  }
}
