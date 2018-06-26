import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmedTrainsPipe } from './pipes/confirmed-trains.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ConfirmedTrainsPipe],
  exports: [ConfirmedTrainsPipe],
})
export class SharedModule {}
