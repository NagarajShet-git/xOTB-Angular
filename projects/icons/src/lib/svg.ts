import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2,
  Inject,
  Optional
} from '@angular/core';
import { normalizeIconName } from './util';
import { XotbIconConfig, XOTB_ICON_CONFIG } from './config';

@Component({
  selector: 'svg[xotbIconName]',
  templateUrl: './svg.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XotbIconSvg {
  path: string;

  @Input('xotbIconName') set iconName(iconName: string) {
    const [category, icon] = normalizeIconName(iconName).split(':');
    this.iconPath = `${this.path}/${category}-sprite/svg/symbols.svg#${icon}`;
  }

  @Input() xPos = '0';

  iconPath: string;

  constructor(
    @Optional() @Inject(XOTB_ICON_CONFIG) defaultConfig: XotbIconConfig,
    el: ElementRef,
    renderer: Renderer2
  ) {
    renderer.setAttribute(el.nativeElement, 'aria-hidden', 'true');

    const config = { ...new XotbIconConfig(), ...defaultConfig };
    this.path = config.svgPath;
  }
}
