import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BillingComponent } from './billing/billing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BillingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BillingComponent }]),
  ],
  exports: [BillingComponent, RouterModule],
  providers: [],
})
export class BillingModule {}
