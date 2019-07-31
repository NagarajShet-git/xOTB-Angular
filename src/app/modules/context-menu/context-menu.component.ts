import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContextMenuComponent implements OnInit {

  @Input() data;
  @Input() klass: any;
  @Input() styleClass:any;
  @ViewChild(MatMenuTrigger)
  menu: MatMenuTrigger;
  isOpenClick: boolean;
  @Output() optionClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() closed: EventEmitter<any> = new EventEmitter<any>();

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    const self = this;
    self.elem.nativeElement.parentElement.addEventListener('click', function (e) {
      self.menu.closeMenu();
    });
    document.addEventListener('contextmenu', function (e) {
      if (self.isInsideBoundary(e)) {
        self.changePosition(e);
      }else{
        self.menu.closeMenu();
      }
    });
    console.log('className ',this.styleClass);
  }

  getClass(): string {
    const classes = 'context-menu-overlap-class ' + this.klass;
    console.log('getClass ',classes);
    return classes;
  }

  changePosition(e) {
    e.preventDefault();
    this.menu.openMenu();
    const elem = (<HTMLElement>document.getElementsByClassName('context-menu-overlap-class')[0]);
    elem.style.position = 'fixed';
    let y = e.clientY, x = e.clientX;

    //adjust contextmenu to be visible
    if((e.pageY+elem.offsetHeight)>(window.pageYOffset+window.innerHeight)){
      y = (e.clientY - elem.offsetHeight) + 'px';
    }else{
      y = e.clientY + 'px';
    }
    if((e.pageX+elem.offsetWidth)>(window.pageXOffset+window.innerWidth)){
      x = (e.clientX - elem.offsetWidth) + 'px';
    }else{
      x = e.clientX + 'px';
    }
    console.log("offset Top ",y,x);
    elem.style.top = y;
    elem.style.left = x
  }

  isInsideBoundary(event) {
    const parent = this.elem.nativeElement.parentElement;
    console.log("event.clientY >= parent.offsetTop ",(event.clientY >= parent.offsetTop), event.clientY, parent.offsetTop);
    console.log("event.clientY < (parent.offsetTop + parent.offsetHeight))",(event.clientY < (parent.offsetTop + parent.offsetHeight)), event.clientY,  (parent.offsetTop + parent.offsetHeight), parent.offsetTop , parent.offsetHeight);
    const heightInBound = ((event.pageY >= parent.offsetTop) && (event.pageY < (parent.offsetTop + parent.offsetHeight)));
    const widthInBound = ((event.pageX >= parent.offsetLeft) && (event.pageX <= (parent.offsetLeft + parent.offsetWidth)));
    console.log("heightInBound",heightInBound);
    console.log("widthInBound",widthInBound);
    if (heightInBound && widthInBound) {
      return true;
    } else {
      return false;
    }
  }

  menuClick(event, data) {
    this.optionClick.emit(data);
  }

  closedMenu(event) {
    this.closed.emit(event);
  }

}
