import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainDashboardComponent } from './containers/train-dashboard/train-dashboard.component';
import { TrainDetailComponent } from './components/train-detail/train-detail.component';
import { ConfirmedTrainsComponent } from './components/confirmed-trains/confirmed-trains.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    TrainDashboardComponent,
    TrainDetailComponent,
    ConfirmedTrainsComponent,
  ],
  exports: [TrainDashboardComponent],
})
export class TrainDashboardModule {}
