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
  styleUrls: ['./train-detail.component.scss'],
})
export class TrainDetailComponent implements OnChanges {
  @Input() train: Train;
  @Output() edit: EventEmitter<Train> = new EventEmitter();
  @Output() delete: EventEmitter<Train> = new EventEmitter();
  editing = false;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.train = Object.assign({}, changes.train.currentValue);
  }

  deleteTrain() {
    this.delete.emit(this.train);
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
