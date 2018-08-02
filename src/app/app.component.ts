import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leticia-soon';

  openWhatsapp() {
    window.open(
      // tslint:disable-next-line:max-line-length
      'https://api.whatsapp.com/send?phone=5511972916705&text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20horario,%20por%20favor&source=&data='
    );
  }
}
