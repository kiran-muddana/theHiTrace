import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.css'],
})
export class ContactUs {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  onSubmit() {
    console.log("form submitted..");
    
    emailjs
      .send(
        'service_aziowp4',
        'template_wsnlusm',
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          phone: this.formData.phone,
          message: this.formData.message,
        },
        'JsuWSyuO1NQSihs7S'
      )
      .then(() => {
        alert('Form submitted! Confirmation email sent.');
        this.formData = { name: '', email: '', phone: '', message: '' };
      })
      .catch((err) => console.error(err));
  }
}
