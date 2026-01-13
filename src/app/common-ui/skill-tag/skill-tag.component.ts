import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-skill-tag',
  imports: [],
  templateUrl: './skill-tag.component.html',
  styleUrl: './skill-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillTagComponent {
  private primaryTags = ['Angular', 'React', 'REST'];

  public highlighted = computed(() => this.checkIsPrimary() ?? false);
  public text = input<string | null>(null);

  protected checkIsPrimary(): boolean {
    return this.primaryTags.includes(this.text() ?? '');
  }
}
