import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TrainDashboardModule } from './train-dashboard/train-dashboard.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { NavigationModule } from './navigation/navigation.module';
import { LettersOnlyDirective } from './shared/validation-directives/letters-only.directive';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent, LettersOnlyDirective],
  imports: [
    // Angular modules
    BrowserModule,
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
