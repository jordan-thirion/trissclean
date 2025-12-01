import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AppModule } from '../app.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, AppModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  backgroundColor: string = '#D6ECF4';
  textColor: string = '#152663';
  logo: string = "/img/logoTrissCleanBlue.png";
  logoWhite: string = "/img/logoTrissCleanWhite.png";
  logofb: string = "/svg/facebook-white.svg";
  logolinkedin: string = "/svg/linkedin-white.svg";
}
