import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfileData } from 'src/app/models/models';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  datas$: Subject<ProfileData>;

  constructor(_profileService: ProfileService) {}

  ngOnInit() {}
}
