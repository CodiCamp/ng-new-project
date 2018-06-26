import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TrainDashboardModule } from './train-dashboard/train-dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    CommonModule,

    // Custom modules
    TrainDashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
