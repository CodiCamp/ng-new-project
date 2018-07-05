import { Component, OnInit } from '@angular/core';
import { Train } from '../../models/train';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train-reactive.component.html',
  styleUrls: ['./view-train-reactive.component.css'],
})
export class ViewTrainReactiveComponent implements OnInit {
  train: Train;
  form: FormGroup;

  arrivalDestination: FormControl = new FormControl('', Validators.required);

  constructor(private activatedRoute: ActivatedRoute, fb: FormBuilder) {
    this.form = fb.group({
      departureDestination: ['', Validators.required],
      arrivalDestination: this.arrivalDestination,
    });
  }

  ngOnInit() {
    this.train = this.activatedRoute.snapshot.data.train;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
