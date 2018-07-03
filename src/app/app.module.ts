import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TrainDashboardModule } from './train-dashboard/train-dashboard.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { NavigationModule } from './navigation/navigation.module';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    // Custom modules
    TrainDashboardModule,
    HomeModule,
    NotFoundModule,
    NavigationModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
