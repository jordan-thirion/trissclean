import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  backgroundColor: string = '#D6ECF4';
  textColor: string = '#152663';
  logo: string = "/img/logoTrissCleanBlue.png";
  logoWhite: string = "/img/logoTrissCleanWhite.png";
}
