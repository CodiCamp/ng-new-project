import { Component, OnInit } from '@angular/core';
import { Train } from '../../models/train';

import { TrainDashboardService } from '../../train-dashboard.service';

@Component({
  selector: 'app-train-dashboard',
  templateUrl: './train-dashboard.component.html',
  styleUrls: ['./train-dashboard.component.css'],
  providers: [TrainDashboardService],
})
export class TrainDashboardComponent implements OnInit {
  trains: Train[];
  constructor(private trainService: TrainDashboardService) {}

  ngOnInit() {
    this.trainService.getTrains().subscribe(
      trains => {
        this.trains = trains;
      },
      error => {
        console.log('Handle error', error);
      },
    );
  }

  deleteTrain(train: Train) {
    this.trains = this.trains.filter(item => {
      return item.id !== train.id;
    });
  }

  mergeEdit(editedTrain: Train) {
    this.trainService.editTrain(editedTrain).subscribe(() => {
      this.trains = this.trains.map(train => {
        if (train.id === editedTrain.id) {
          train = { ...train, ...editedTrain };
        }
        return train;
      });
    });
  }
}
