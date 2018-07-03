import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { TrainDashboardService } from '../../train-dashboard.service';
import { Train } from '../../models/train';

@Injectable()
export class ViewTrainResolverService implements Resolve<Train> {
  constructor(private trainService: TrainDashboardService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.trainService.getTrain(route.params.id);
  }
}
