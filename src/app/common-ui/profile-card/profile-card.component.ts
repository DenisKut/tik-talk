import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SkillTagComponent } from '../skill-tag/skill-tag.component';

import { ActionButtonComponent } from './../action-button/action-button.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-profile-card',
  imports: [SkillTagComponent, ActionButtonComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  protected tags = ['Angular', 'HTML', 'CSS', 'REST'];
}
