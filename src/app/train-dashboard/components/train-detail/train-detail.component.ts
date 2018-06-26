import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Train } from '../../models/train';

@Component({
  selector: 'app-train-detail',
  templateUrl: './train-detail.component.html',
  styleUrls: ['./train-detail.component.css'],
})
export class TrainDetailComponent implements OnChanges {
  @Input() train: Train;
  @Output() edit: EventEmitter<Train> = new EventEmitter();
  editing = false;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.train = Object.assign({}, changes.train.currentValue);
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.train);
    }

    this.editing = !this.editing;
  }

  updateDestination(newDestination: string): void {
    this.train.destination = newDestination;
  }

  updateOrigin(newOrigin: string): void {
    this.train.origin = newOrigin;
  }
}
