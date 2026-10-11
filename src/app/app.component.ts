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
}
