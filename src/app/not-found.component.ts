import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WebsiteDataService } from './website-data.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (dataService.data(); as d) {
      <div class="site-shell not-found-shell">
        <header class="site-header">
          <a class="wordmark" routerLink="/" [attr.aria-label]="d.brand.ariaLabel">
            <span class="wordmark-symbol" aria-hidden="true">{{ d.brand.symbol }}</span>
            <span class="wordmark-copy">{{ d.brand.name }} <span>{{ d.brand.nameSecondary }}</span></span>
          </a>
        </header>

        <main class="not-found-main">
          <div class="not-found-content">
            <span class="not-found-code">404</span>
            <span class="not-found-spark" aria-hidden="true">✳</span>
            <h1>A stitch in time, but this page wasn't found.</h1>
            <p>
              The page you're looking for might have been moved, renamed, or is currently being crafted.
            </p>
            <div class="not-found-actions">
              <a routerLink="/" class="back-home-button">
                <span>Back to Homepage</span>
                <span aria-hidden="true">←</span>
              </a>
              <a [href]="d.hero.cta.href" target="_blank" rel="noopener noreferrer" class="whatsapp-sub-button">
                <span>Enquire on WhatsApp</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </main>

        <footer class="site-footer">
          <div class="footer-bottom">
            <span>© {{ d.footer.copyrightYear }} {{ d.brand.name }} {{ d.brand.nameSecondary }}. All rights reserved.</span>
          </div>
        </footer>
      </div>
    }
  `,
  styles: [`
    .not-found-shell {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .not-found-main {
      flex: 1;
      display: grid;
      place-items: center;
      padding: 60px 0 80px;
      text-align: center;
    }
    .not-found-content {
      max-width: 560px;
    }
    .not-found-code {
      display: inline-block;
      font-size: 5rem;
      font-family: var(--serif);
      font-weight: 600;
      color: var(--terracotta);
      letter-spacing: -0.05em;
      line-height: 1;
    }
    .not-found-spark {
      display: inline-block;
      color: var(--olive);
      font-size: 1.8rem;
      margin-left: 8px;
      vertical-align: super;
    }
    h1 {
      margin: 16px 0 14px;
      font-family: var(--serif);
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      color: var(--forest);
      font-weight: 500;
      line-height: 1.15;
    }
    p {
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.7;
      margin: 0 0 32px;
    }
    .not-found-actions {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .back-home-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: var(--forest);
      color: var(--paper);
      padding: 13px 22px;
      border-radius: 2px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.8rem;
      transition: background 180ms ease;
    }
    .back-home-button:hover {
      background: var(--terracotta);
    }
    .whatsapp-sub-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid var(--forest);
      color: var(--forest);
      padding: 13px 22px;
      border-radius: 2px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.8rem;
      transition: background 180ms ease, color 180ms ease;
    }
    .whatsapp-sub-button:hover {
      background: var(--forest);
      color: var(--paper);
    }
    .footer-bottom {
      padding: 24px 0;
      border-top: 1px solid var(--line);
      color: var(--muted);
      font-size: 0.72rem;
      text-align: center;
    }
  `]
})
export class NotFoundComponent {
  protected readonly dataService = inject(WebsiteDataService);
}
