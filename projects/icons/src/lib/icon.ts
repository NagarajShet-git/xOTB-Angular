import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  OnChanges,
  ElementRef
} from '@angular/core';
import { normalizeIconName } from './util';
import { HostService } from 'ng-xotb/shared-lib';
import { isRequired, ngClassCombine } from 'ng-xotb/utility';

@Component({
  selector: 'xotb-icon, [xotb-icon]',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HostService]
})
export class XotbIcon implements OnInit, OnChanges {
  @isRequired
  @Input()
  set iconName(iconName: string) {
    this._iconName = normalizeIconName(iconName);
  }
  get iconName() {
    return this._iconName;
  }

  /**
   * The appearance of a `utility` icon.
   */
  @Input() variant:
    | 'default'
    | 'warning'
    | 'error'
    | 'light'
    | 'inverse'
    | null = 'default';

  /**
   * The size of the icon.
   */
  @Input() size: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';

  /**
   * Text used to describe the icon for accessibility.
   */
  @Input() alternativeText: string;

  /**
   * CSS classes that are applied to the SVG.
   */
  @Input() svgClass:
    | string
    | string[]
    | Set<string>
    | { [styleClass: string]: any };

  private _iconName: string;

  constructor(private el: ElementRef, private hostService: HostService) {}

  ngOnInit() {
    this.setHostClass();
  }

  ngOnChanges() {
    this.setHostClass();
  }

  svgClasses() {
    const [category] = this.iconName.split(':');
    const isUtility = category === 'utility';
    const isDefaultOrInverse =
      this.variant === 'default' || this.variant === 'inverse';

    const classes = {
      [`xotb-icon_${this.size}`]: !!this.size && this.size !== 'medium',
      [`xotb-icon-text-${
        isDefaultOrInverse ? 'default' : this.variant
      }`]: isDefaultOrInverse
        ? this.variant === 'default'
          ? isUtility
          : !isUtility
        : !!this.variant
    };

    return ngClassCombine(this.svgClass, classes);
  }

  private setHostClass() {
    const [category, icon] = this.iconName.split(':');
    const kebabCaseName = icon.replace(/_/g, '-');

    this.hostService.updateClass(this.el, {
      [`xotb-icon_container`]: category !== 'utility',
      [`xotb-icon_container_circle`]: category === 'action',
      [`xotb-icon-${category}-${kebabCaseName}`]:
        category !== 'utility' && category !== 'doctype'
    });
  }
}
