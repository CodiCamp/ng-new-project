import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [NotFoundComponent],
})
export class NotFoundModule {}
