import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Round, RoundInfo } from '../models/rounds';
import { firstValueFrom } from 'rxjs';



@Service()
export class RoundService {
      private readonly http = inject(HttpClient);

      async getRounds(): Promise<RoundInfo[]> {
            return firstValueFrom(this.http.get<RoundInfo[]>('assets/rounds/index.json'));
      }

      async getRound(id: string): Promise<Round> {
            return firstValueFrom(this.http.get<Round>(`assets/rounds/${id}/round.json`));
      }
}
