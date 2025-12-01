import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AppModule } from "../app.module";

@Component({
  selector: 'app-worker',
  imports: [HeaderComponent, FooterComponent, AppModule],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})
export class WorkerComponent implements OnInit, OnDestroy {
  backgroundColor: string = '#152663';
  textColor: string = '#D6ECF4';
  logo: string = "/img/logoTrissCleanWhite.png";
  logofb: string = "/svg/facebook-white.svg";
  logolinkedin: string = "/svg/linkedin-white.svg";

  worker = [
    { 
      nom: 'Fanny',
      titre: 'Nettoyeuse - Prothésiste ongulaire - Garde d\'enfants',
      text: "J\'ai 22 ans, je suis prestataire indépendante. Dynamique et sérieuse, j’ai une solide expérience dans le nettoyage et je propose mes services pour l’entretien de vos locaux ou de votre domicile. Je réalise également des prestations de prothésie ongulaire et de garde d’enfants."
    },
  ];

  currentIndex = 0;
  autoSlideInterval: any;
  isPaused = false;

  ngOnInit(): void {
    // Lancer le changement automatique toutes les 5 secondes
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    // Nettoyer l’intervalle quand le composant disparaît
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      if (!this.isPaused) {
        this.next();
      }
    }, 5000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  pauseAutoSlide() {
    this.isPaused = true;
  }

  resumeAutoSlide() {
    this.isPaused = false;
  } 

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.worker.length;
  }

  prev() {
    this.currentIndex = this.currentIndex === 0 
      ? this.worker.length - 1 
      : this.currentIndex - 1;
  }
}
