import { Component, OnInit } from '@angular/core';
import { TrainDashboardService } from '../../train-dashboard.service';
import { Train } from '../../models/train';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.css'],
})
export class ViewTrainComponent implements OnInit {
  train: Train;

  constructor(
    private trainService: TrainDashboardService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute);
    this.train = this.activatedRoute.snapshot.data.train;

    //   this.activatedRoute.params
    //     .pipe(
    //       switchMap(data => {
    //         return this.trainService.getTrain(data.id);
    //       }),
    //     )
    //     .subscribe(
    //       (train: Train) => {
    //         this.train = train;
    //       },
    //       (error: HttpErrorResponse) => {
    //         console.log(error);
    //         if (error.status === 404) {
    //           this.router.navigate(['trains']);
    //         }
    //       },
    //     );
  }
}
