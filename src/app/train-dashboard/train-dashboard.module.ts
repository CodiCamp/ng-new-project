import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainDashboardComponent } from './containers/train-dashboard/train-dashboard.component';
import { TrainDetailComponent } from './components/train-detail/train-detail.component';
import { ConfirmedTrainsComponent } from './components/confirmed-trains/confirmed-trains.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ViewTrainComponent } from './containers/view-train/view-train.component';
import { ViewTrainResolverService } from './containers/view-train/view-train-resolver.service';

const routes: Routes = [
  {
    path: 'trains',
    children: [
      {
        path: '',
        component: TrainDashboardComponent,
      },
      {
        path: ':id',
        component: ViewTrainComponent,
        resolve: {
          train: ViewTrainResolverService,
        },
      },
    ],
  },
];
@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    TrainDashboardComponent,
    TrainDetailComponent,
    ConfirmedTrainsComponent,
    ViewTrainComponent,
  ],
  providers: [ViewTrainResolverService],
})
export class TrainDashboardModule {}
