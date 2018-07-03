import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { TrainDashboardService } from '../../train-dashboard.service';
import { Train } from '../../models/train';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ViewTrainResolverService implements Resolve<Train> {
  constructor(
    private trainService: TrainDashboardService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.trainService.getTrain(route.params.id).pipe(
      map((train: Train) => {
        if (train) {
          return train;
        }
        // Safe case handle when we don't have a train returned for some reason
        this.router.navigate(['trains']);
        return null;
      }),
      catchError(error => {
        console.log(error);
        // Handl error
        this.router.navigate(['trains']);

        return of<Train>(null);
      }),
    );
  }
}
