import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonList, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/angular';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel],
})
export class ResultsPage implements OnInit {
  readonly ratingService = inject(RatingService);

  constructor() {}

  ngOnInit() {}
}
