import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonListHeader, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular';
import { Clip, Round } from '../models/rounds';
import { RoundService } from '../services/round.service';
import { addIcons } from 'ionicons';
import { play, pause } from 'ionicons/icons';

@Component({
  selector: 'app-round-detail',
  templateUrl: './round-detail.page.html',
  styleUrls: ['./round-detail.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonListHeader, IonItem, IonLabel, IonButton, IonIcon],
})
export class RoundDetailPage implements OnInit {
  readonly id = input.required<string>();
  readonly round = signal<Round | null>(null);
  private readonly roundService = inject(RoundService);

  private readonly audio = new Audio();
  readonly playing = signal<number | null>(null);

  toggle(clip: Clip) {
    if (this.playing() === clip.n) {
      this.audio.pause();
      this.playing.set(null);
      return;
    }
    this.audio.src = `assets/rounds/${this.id()}/${clip.file}`;
    this.audio.play();
    this.playing.set(clip.n);
  }

  constructor() {
    addIcons({ play, pause });
  }

  async ngOnInit() {
    this.round.set(await this.roundService.getRound(this.id()))
    this.audio.onended = () => this.playing.set(null);
  }

  async ionViewWillLeave() {
    this.audio.pause();
    this.playing.set(null);
  }
}
