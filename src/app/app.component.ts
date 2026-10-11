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
    let targetUrl = '';
    if (encodedPayload) {
      try {
        targetUrl = atob(encodedPayload);
      } catch (err) {
        console.error('Failed to decode link', err);
      }
    }
    if (!targetUrl && fallbackHref && fallbackHref !== '#') {
      targetUrl = fallbackHref;
    }

    if (targetUrl) {
      window.location.assign(targetUrl);
    }
  }
}
