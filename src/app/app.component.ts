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

  protected onWhatsAppClick(event: MouseEvent, encodedPayload?: string, fallbackHref?: string): void {
    event.preventDefault();
    if (encodedPayload) {
      try {
        const decodedUrl = atob(encodedPayload);
        window.open(decodedUrl, '_blank', 'noopener,noreferrer');
        return;
      } catch (err) {
        console.error('Failed to decode link', err);
      }
    }
    if (fallbackHref && fallbackHref !== '#') {
      window.open(fallbackHref, '_blank', 'noopener,noreferrer');
    }
  }
}
