import { Component, Input } from '@angular/core';
import { AppModule } from '../app.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [AppModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() backgroundColor: string = '#D6ECF4';
  @Input() textColor: string = '#152663';
  @Input() logo: string = "/img/logoTrissCleanBlue.png";

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
