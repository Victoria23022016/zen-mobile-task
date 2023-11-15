import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports/reports.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ReportsComponent }]),
  ],
  exports: [ReportsComponent, RouterModule],
  providers: [],
})
export class ReportsModule {}
