import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  ElementRef,
  Renderer2,
  QueryList,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  InputBoolean,
  addOptionToSelection,
  isOptionSelected
} from 'ng-xotb/utility';
import { XotbAccordionSection } from './accordion-section';

@Component({
  selector: 'xotb-accordion,[xotb-accordion]',
  templateUrl: './accordion.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class XotbAccordion {
  /**
   * Defines the expanded section(s).
   */
  @Input() activeName: string | string[];

  @Output() activeNameChange = new EventEmitter<string | string[]>();

  /**
   * Whether we allow multiple sections open at a time.
   */
  @Input() @InputBoolean() multiple = false;

  @ContentChildren(XotbAccordionSection) sections: QueryList<
    XotbAccordionSection
  >;

  constructor(element: ElementRef, renderer: Renderer2) {
    renderer.addClass(element.nativeElement, 'xotb-accordion');
  }

  toggle(section: XotbAccordionSection) {
    const active = addOptionToSelection(
      section.name,
      this.activeName,
      this.multiple
    );
    this.activeNameChange.emit(active);
  }

  isActive(section: XotbAccordionSection): boolean {
    return isOptionSelected(section.name, this.activeName, this.multiple);
  }
}
