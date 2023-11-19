import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProfileData } from 'src/app/models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() profileData: ProfileData;
  @Input() profileDataState: boolean;

  firstName: string = '-';
  lastName: string = '-';
  webSite: string = '-';

  ngDoCheck() {
    if (this.profileData !== undefined && this.profileDataState !== false) {
      this.firstName = this.profileData.firstName;
      this.lastName = this.profileData.lastName;
      this.webSite = this.profileData.url;
    }
  }
}
