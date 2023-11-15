import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProfileComponent }]),
  ],
  exports: [ProfileComponent, RouterModule],
  providers: [],
})
export class ProfileModule {}
