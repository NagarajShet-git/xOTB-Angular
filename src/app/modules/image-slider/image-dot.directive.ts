import { Directive, HostListener, HostBinding, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appImageDot]'
})
export class ImageDotDirective {

  constructor(private ele: ElementRef, private rend: Renderer2) { }

  @HostBinding('style.background-color') color: string;

  @Input() highlightColor: string = "darkgrey";
  @Input() defultColor: string = "darkgrey";
  private isHover: boolean = true;
  private isClick: boolean = false;

  @HostListener('click')
  onClick(): void {
    this.isClick = true;
    let parent = this.ele.nativeElement.parentNode;
    for (let i = 0; i < parent.children.length; i++) {
      let ele = parent.children[i];
      this.rend.setStyle(ele, 'background-color', this.defultColor);
    }
    this.rend.setStyle(this.ele.nativeElement, 'background-color', this.highlightColor);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // if (this.ele.nativeElement.style.backgroundColor === this.highlightColor) {
    //   this.isHover = false;
    // } else {
    //   this.isHover = true;
    // }
    // this.color = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // if (this.isHover) {
    //   this.color = this.defultColor;
    // }
    // if (this.isClick) {
    //   this.OnChangeBgColor();
    //   this.color = this.highlightColor;
    //   this.isClick = false;
    // }
  }

  OnChangeBgColor() {
    let parent = this.ele.nativeElement.parentNode;
    for (let i = 0; i < parent.children.length; i++) {
      let ele = parent.children[i];
      this.rend.setStyle(ele, 'background-color', this.defultColor);
    }
    this.rend.setStyle(this.ele.nativeElement, 'background-color', this.highlightColor);
  }

}
