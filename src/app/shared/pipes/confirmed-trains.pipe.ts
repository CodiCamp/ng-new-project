import { Pipe, PipeTransform } from '@angular/core';
import { Train } from '../../train-dashboard/models/train';

@Pipe({
  name: 'confirmedTrains',
})
export class ConfirmedTrainsPipe implements PipeTransform {
  transform(trains: Train[], args?: any): number {
    return trains.filter(train => train.confirmed).length;
  }
}
