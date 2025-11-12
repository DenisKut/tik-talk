import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('tik-talk');
}
