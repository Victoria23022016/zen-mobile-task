import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileValidators } from './profile.validators';
import { ProfileService } from 'src/app/services/profile.service';
import { ProfileData } from 'src/app/models/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  formData: ProfileData;
  email: string = 'svi.victoria@'; //не забыть поменять

  constructor(private readonly _profileService: ProfileService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        ProfileValidators.phoneValidator,
      ]),
      url: new FormControl('', ProfileValidators.urlValidator),
    });
  }

  submit(): void {
    this.formData = { ...this.form.value };
    this._profileService.sendData(this.formData);
    this.form.reset();
  }
}
