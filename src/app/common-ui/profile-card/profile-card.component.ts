import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {}
