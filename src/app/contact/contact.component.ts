import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppModule } from '../app.module';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [AppModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  backgroundColor: string = '#D6ECF4';
  textColor: string = '#152663';
  logo: string = "/img/logoTrissCleanBlue.png";
  logofb: string = "/svg/facebook-blue.svg";
  logolinkedin: string = "/svg/linkedin-blue.svg";

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10}$')]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() { // gestion erreur
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        reply_to: this.contactForm.value.email,
        message: this.contactForm.value.message + (this.contactForm.value.phone ? `\nTéléphone: ${this.contactForm.value.phone}` : '')
      };

      emailjs.send(
        'service_exto55o',
        'template_n3gaug5',
        templateParams,
        'FKYzAsPMel9vBO_gA'
      ).then(() => {
        alert('Message envoyé avec succès !');
        this.contactForm.reset();
      }).catch((error) => {
        console.error('Erreur EmailJS:', error);
        alert("Échec de l'envoi du message.");
      });
    } else {
      alert('Veuillez remplir correctement le formulaire avant de soumettre.');
    }
  }
}
