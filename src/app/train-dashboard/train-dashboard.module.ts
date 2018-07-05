import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainDashboardComponent } from './containers/train-dashboard/train-dashboard.component';
import { TrainDetailComponent } from './components/train-detail/train-detail.component';
import { ConfirmedTrainsComponent } from './components/confirmed-trains/confirmed-trains.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewTrainComponent } from './containers/view-train/view-train.component';
import { ViewTrainReactiveComponent } from './containers/view-train-reactive/view-train-reactive.component';
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
      {
        path: 'reactive/:id',
        component: ViewTrainReactiveComponent,
        resolve: {
          train: ViewTrainResolverService,
        },
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TrainDashboardComponent,
    TrainDetailComponent,
    ConfirmedTrainsComponent,
    ViewTrainComponent,
    ViewTrainReactiveComponent,
  ],
  providers: [ViewTrainResolverService],
})
export class TrainDashboardModule {}
