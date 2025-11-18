import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-skill-tag',
  imports: [],
  templateUrl: './skill-tag.component.html',
  styleUrl: './skill-tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillTagComponent implements OnInit {
  private primaryTags = ['Angular', 'React', 'REST'];

  @Input() public highlighted: boolean = false;
  @Input() public text: string | null = null;

  ngOnInit() {
    this.highlighted = this.checkIsPrimary();
  }

  protected checkIsPrimary(): boolean {
    return this.primaryTags.includes(this.text ?? '');
  }
}
