import { Component, OnInit } from '@angular/core';
import { Train } from '../../models/train';
import { trainsList } from '../../data/trains-data';

@Component({
  selector: 'app-train-dashboard',
  templateUrl: './train-dashboard.component.html',
  styleUrls: ['./train-dashboard.component.css'],
})
export class TrainDashboardComponent implements OnInit {
  trains: Train[];
  constructor() {}

  ngOnInit() {
    this.trains = trainsList;
  }

  mergeEdit(editedTrain: Train) {
    this.trains = this.trains.map(train => {
      if (train.id === editedTrain.id) {
        train = { ...train, ...editedTrain };
      }

      return train;
    });
  }
}
