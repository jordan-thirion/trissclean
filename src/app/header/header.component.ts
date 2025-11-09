import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-header',
  imports: [RouterLink, AppModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() backgroundColor: string = '#D6ECF4';
  @Input() textColor: string = '#152663';
  @Input() logo: string = "/img/logoTrissCleanBlue.png";

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
