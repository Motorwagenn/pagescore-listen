import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem } from '@ionic/angular';
import { RoundInfo } from '../models/rounds';
import { RoundService } from '../services/round.service';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.page.html',
  styleUrls: ['./rounds.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, CommonModule, FormsModule],
})
export class RoundsPage implements OnInit {
  private readonly roundService = inject(RoundService);
  readonly rounds = signal<RoundInfo[]>([]);

  constructor() {}

  async ngOnInit() {
  this.rounds.set(await this.roundService.getRounds())  }
}
