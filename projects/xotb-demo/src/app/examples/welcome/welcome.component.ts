import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  AfterContentInit
} from '@angular/core';

@Component({
  template: `
    <xotb-panel title="ng-xotb documentation">
      <iframe
        #readme
        [height]="innerHeight"
        width="100%"
        src="./assets/docs/README.html"
        type="text/html"
        style="border:0; font-family:Helvetica, sans-serif;"
      ></iframe>
    </xotb-panel>
  `,
  styles: [
    `
      body {
        font-family: Helvetica, sans-serif;
      }
    `
  ]
})
export class DemoWelcomeComponent implements OnInit, AfterContentInit {
  public innerHeight: any;

  @ViewChild('readme', { static: true }) readme: ElementRef;

  ngOnInit() {
    this.innerHeight = window.innerHeight - 120;
  }
  ngAfterContentInit() {
    this.readme.nativeElement.onload = () => {
      const iframe = this.readme.nativeElement.contentDocument.documentElement;
      const style = document.createElement('style');
      style.textContent =
        'body {' +
        '  font-family: Helvetica, sans-serif;' +
        '  font-size: 12px;' +
        '}';
      iframe.getElementsByTagName('head')[0].appendChild(style);
    };
  }
}
