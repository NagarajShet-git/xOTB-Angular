import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './tooltips.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTooltipsBasic {
  placements = ['top', 'right', 'bottom', 'left'];

  placement = this.placements[0];

  open = true;

  change() {
    const i = this.placements.indexOf(this.placement);
    this.placement = this.placements[(i + 1) % 4];
  }
}
