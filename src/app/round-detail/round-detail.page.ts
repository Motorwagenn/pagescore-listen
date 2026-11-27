import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/angular';
import { Round } from '../models/rounds';
import { RoundService } from '../services/round.service';

@Component({
  selector: 'app-round-detail',
  templateUrl: './round-detail.page.html',
  styleUrls: ['./round-detail.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonListHeader, IonItem, IonLabel],
})
export class RoundDetailPage implements OnInit {
  readonly id = input.required<string>();
  readonly round = signal<Round | null>(null);
  private readonly roundService = inject(RoundService);


  constructor() {}

  async ngOnInit() {
    this.round.set(await this.roundService.getRound(this.id()))
  }
}
