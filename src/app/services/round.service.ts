import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Round, RoundInfo } from '../models/rounds';
import { firstValueFrom } from 'rxjs';



@Service()
export class RoundService {
      private readonly http = inject(HttpClient);
      private readonly repo = 'Motorwagenn/pagescore-listen';
      private readonly api = `https://api.github.com/repos/${this.repo}/contents/rounds`;
      private readonly raw = `https://raw.githubusercontent.com/${this.repo}/main/rounds`;
      private readonly headers = { Accept: 'application/vnd.github.raw+json' };

      async getRounds(): Promise<RoundInfo[]> {
            return firstValueFrom(this.http.get<RoundInfo[]>(`${this.api}/index.json`, { headers: this.headers }));
      }

      async getRound(id: string): Promise<Round> {
            return firstValueFrom(this.http.get<Round>(`${this.api}/${id}/round.json`, { headers: this.headers }));
      }

      clipUrl(id: string, file: string): string {
            return `${this.raw}/${id}/${file}`;
      }
}
