import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  TemplateRef,
  ElementRef,
  Renderer2
} from '@angular/core';
import {
  Placement,
  POSITION_MAP,
  getPlacementStyles,
  OnChange,
  ngClassCombine
} from 'ng-xotb/utility';
import { HostService } from 'ng-xotb/shared-lib';
import { XotbThemeService } from 'ng-xotb/xotb-theme';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'div[xotb-tooltip]',
  templateUrl: './tooltip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService],
  styleUrls: ['./tooltip.css']
})
export class XotbTooltip {
  @OnChange() template: string | TemplateRef<void>;

  @OnChange() placement: Placement;

  @OnChange() uid: string;

  @OnChange() tooltipClass: any;

  private nubbin: Placement;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private hostService: HostService,
    private cd: ChangeDetectorRef,
    private theme: XotbThemeService
  ) {
    this.theme.toggleLight();

    this.renderer.addClass(this.element.nativeElement, 'xotb-popover');
    this.renderer.addClass(this.element.nativeElement, 'xotb-popover_tooltip');
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'tooltip');
  }

  xotbOnPropertyChange(prop) {
    if (prop === 'uid') {
      this.renderer.setAttribute(this.element.nativeElement, 'id', this.uid);
    } else if (prop === 'placement') {
      this.nubbin = POSITION_MAP[this.placement].nubbin;
      this.setHostClass();
    } else if (prop === 'template') {
      this.cd.markForCheck();
    } else if (prop === 'tooltipClass') {
      this.setHostClass();
    }
  }

  private setHostClass() {
    this.hostService.updateClass(
      this.element,
      ngClassCombine(this.tooltipClass, {
        [`xotb-nubbin_${this.nubbin}`]: true
      })
    );

    this.hostService.updateStyle(this.element, getPlacementStyles(this.nubbin));
  }
}
