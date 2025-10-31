import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-worker',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './worker.component.html',
  styleUrl: './worker.component.css'
})
export class WorkerComponent {
  backgroundColor: string = '#152663';
  textColor: string = '#D6ECF4';
  logo: string = "/img/logoTrissCleanWhite.png";
}
