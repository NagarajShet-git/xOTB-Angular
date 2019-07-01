import { Component, OnInit, ElementRef, Renderer, Input,  AfterViewChecked, Output, EventEmitter, ViewChild, ViewChildren, QueryList } from '@angular/core';


@Component({

  selector: 'app-image-slider',

  templateUrl: './image-slider.component.html',

  styleUrls: ['./image-slider.component.css']

})

export class ImageSliderComponent implements OnInit, AfterViewChecked {

  @Input() imagesData;
  @Input() arrowColor: string = "#912525";
  @Input() arrowBgColor: string = "white";
  @Input() texColor: string = "#f2f2f2";
  @Input() bottomButtonColor: string = "#bbb";
  @Input() bottomButtonSelectedColor: string = "#717171";

  @ViewChildren('spanDot') spanDot :QueryList<any>;

  private isFirstTime: boolean = true;



  @Output() currentImage = new EventEmitter<object>();

  slideIndex = 1;

  constructor(private el: ElementRef,
    private renderer: Renderer) { }


  ngOnInit() {

  }


  ngAfterViewChecked() {
    if (this.isFirstTime) {
      this.showSlides(1);
      this.isFirstTime = false;
    }


  }


  showSlides(n) {

    let i;

    const slides = this.el.nativeElement.querySelectorAll('.xOTB-mySlides');

    // const dots = this.el.nativeElement.querySelectorAll('.xOTB-dot');

    if (n > slides.length) {

      this.slideIndex = 1;

    }

    if (n < 1) {

      this.slideIndex = slides.length;

    }

    for (i = 0; i < slides.length; i++) {
      this.renderer.setElementStyle(slides[i], 'display', 'none');
    }

    // for (i = 0; i < dots.length; i++) {

    //   dots[i].className = dots[i].className.replace(' xOTB-active', '');

    // }

    if (slides.length !== 0) {
      this.renderer.setElementStyle(slides[this.slideIndex - 1], 'display', 'block');
      this.currentImage.emit(this.imagesData[this.slideIndex - 1]);
    }

    // if (dots.length !== 0) {
    //   dots[this.slideIndex - 1].className += ' xOTB-active';
    // }

    let ele = this.spanDot.toArray();
    let htmlEle:HTMLElement = ele[this.slideIndex -1].nativeElement;
    htmlEle.click();

  }
  plusSlides(n) {

    this.showSlides(this.slideIndex += n);

  }

  currentSlide(n) {

    this.showSlides(this.slideIndex = n);

  }

  sendData(obj) {
    // this.currentImage.emit(obj);
  }


}
