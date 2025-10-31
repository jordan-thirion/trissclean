import { Component, Input } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-footer',
  imports: [AppModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() backgroundColor: string = '#D6ECF4';
  @Input() textColor: string = '#152663';
  @Input() logo: string = "/img/logoTrissCleanBlue.png";
}
