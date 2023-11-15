import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: InventoryComponent }]),
  ],
  exports: [InventoryComponent, RouterModule],
  providers: [],
})
export class InventoryModule {}
