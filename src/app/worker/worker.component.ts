import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AppModule } from "../app.module";

@Component({
  selector: 'app-worker',
  imports: [HeaderComponent, FooterComponent, AppModule],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})
export class WorkerComponent {
  backgroundColor: string = '#152663';
  textColor: string = '#D6ECF4';
  logo: string = "/img/logoTrissCleanWhite.png";

  worker = [
    { image: '/img/cleaner1.png',
      nom: 'Jean Dupont',
      titre: 'Nettoyeur',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore' 
    },
    { image: '/img/cleaner2.png', 
      nom: 'Marie Curie',
      titre: 'Nettoyeuse',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 2' 
    },
    { image: '/img/cleaner4.png', 
      nom: 'Ahmed Benali',
      titre: 'Technicien de surface',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 3' 
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.worker.length;
  }

  prev() {
    this.currentIndex = this.currentIndex === 0 
      ? this.worker.length - 1 
      : this.currentIndex - 1;
  }
}
