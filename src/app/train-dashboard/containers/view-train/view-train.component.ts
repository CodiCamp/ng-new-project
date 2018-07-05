import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { TrainDashboardService } from '../../train-dashboard.service';
import { Train } from '../../models/train';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.css'],
})
export class ViewTrainComponent implements OnInit, AfterViewInit {
  train: Train;

  @ViewChild('departureDestination') departureDInput: ElementRef;
  @ViewChild('form') form: ElementRef;

  constructor(
    private trainService: TrainDashboardService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngAfterViewInit() {
    console.log(this.form, this.departureDInput);
  }

  ngOnInit() {
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

  submitForm(form) {
    console.log(form);
  }
}
