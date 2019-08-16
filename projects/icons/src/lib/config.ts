import { InjectionToken } from '@angular/core';

// Injection token that can be used to specify default options
export const XOTB_ICON_CONFIG = new InjectionToken<XotbIconConfig>(
  'xotb-icon-config'
);

/**
 * Configuration service for the icons components.
 */
export class XotbIconConfig<D = any> {
  /**
   * The path to assets
   */
  svgPath = 'assets/icons';
}
