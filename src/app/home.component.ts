import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebsiteDataService } from './website-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './app.component.css'
})
export class HomeComponent {
  protected readonly dataService = inject(WebsiteDataService);
  protected readonly data = this.dataService.data;

  // Mobile navigation drawer state
  protected readonly mobileMenuOpen = signal<boolean>(false);

  // Quick Enquiry Form state
  protected enquiryName = '';
  protected enquiryPhone = '';
  protected enquiryService = '';
  protected enquiryMessage = '';
  protected formSubmitted = signal<boolean>(false);
  protected formSuccess = signal<string | null>(null);
  protected formError = signal<string | null>(null);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected submitEnquiry(): void {
    this.formSubmitted.set(true);
    this.formSuccess.set(null);
    this.formError.set(null);

    const name = this.enquiryName.trim();
    const phone = this.enquiryPhone.trim();
    const service = this.enquiryService;
    const msg = this.enquiryMessage.trim();

    if (!name) {
      this.formError.set('Please enter your name so we can address you properly.');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      this.formError.set('Please provide a valid 10-digit mobile number.');
      return;
    }

    // Build WhatsApp message with customer details
    const lines = [
      `Hello Nivha By Fashion Cut,`,
      `I'd like to submit an enquiry:`,
      `• Name: ${name}`,
      `• Phone: ${phone}`,
      service ? `• Interested in: ${service}` : '',
      msg ? `• Details: ${msg}` : ''
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/918078908616?text=${encodeURIComponent(lines)}`;

    this.formSuccess.set('Thank you! Redirecting to WhatsApp to send your enquiry...');

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      this.enquiryName = '';
      this.enquiryPhone = '';
      this.enquiryService = '';
      this.enquiryMessage = '';
      this.formSubmitted.set(false);
    }, 600);
  }
}
