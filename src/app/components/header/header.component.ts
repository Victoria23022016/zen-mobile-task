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

  firstName: string = '-';
  lastName: string = '-';
  webSite: string = '-';
}
