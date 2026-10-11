import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { WebsiteData } from './website-data.types';

@Injectable({ providedIn: 'root' })
export class WebsiteDataService {
  private readonly http = inject(HttpClient);

  /** Null while loading; the parsed data once resolved. */
  readonly data = toSignal(
    this.http.get<WebsiteData>('/data/data.json').pipe(
      catchError((err) => {
        console.error('[WebsiteDataService] Failed to load data.json:', err);
        return of(null);
      })
    ),
    { initialValue: null }
  );
}
