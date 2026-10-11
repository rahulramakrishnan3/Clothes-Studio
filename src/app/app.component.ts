import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteDataService } from './website-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly dataService = inject(WebsiteDataService);
  protected readonly data = this.dataService.data;

  protected get whatsappUrl(): string {
    const cta = this.data()?.hero?.cta;
    if (cta?.encodedPayload) {
      try {
        return atob(cta.encodedPayload);
      } catch (e) {
        console.error('Error decoding WhatsApp payload', e);
      }
    }
    return cta?.href && cta.href !== '#' ? cta.href : 'https://wa.me/919349136613';
  }
}
