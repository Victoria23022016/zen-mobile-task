import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'auth', component: AuthFormComponent },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routes),
  ],
  exports: [],
  providers: [AuthModule], //убрать?
})
export class AuthModule {}
