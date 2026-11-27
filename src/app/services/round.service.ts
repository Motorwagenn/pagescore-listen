import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoundInfo } from '../models/rounds';
import { firstValueFrom } from 'rxjs';



@Service()
export class RoundService {
      private readonly http = inject(HttpClient);

      async getRounds(): Promise<RoundInfo[]> {
            return firstValueFrom(this.http.get<RoundInfo[]>('assets/rounds/index.json'));
      }
}
