import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileData } from 'src/app/models/models';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  profileData: ProfileData;
  profileDataUpdate: boolean;

  constructor(private readonly _profileService: ProfileService) {}
}
