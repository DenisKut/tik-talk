import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SkillTagComponent } from '../skill-tag/skill-tag.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-profile-card',
  imports: [SkillTagComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  protected tags = ['Angular', 'HTML', 'CSS', 'REST'];
}
