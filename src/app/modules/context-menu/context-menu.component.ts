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
    this.eventHandler = this.eventHandler.bind(this);
    document.addEventListener('contextmenu', this.eventHandler);
    console.log('className ',this.styleClass);
  }

  eventHandler(e){
    if (this.isInsideBoundary(e)) {
      this.changePosition(e);
    }else{
      this.menu.closeMenu();
    }
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
    const y = e.clientY + 'px';
    let x = e.clientX + 'px';

    //adjust contextmenu to be visible
    if((e.pageX+elem.offsetWidth)>(window.pageXOffset+window.innerWidth)){
      x = (e.clientX - elem.offsetWidth) + 'px';
    }
    elem.style.top = y;
    elem.style.left = x
  }

  isInsideBoundary(event) {
    const parent = this.elem.nativeElement.parentElement.getBoundingClientRect();
    const heightInBound = ((event.clientY >= parent.y) && (event.clientY < (parent.y + parent.height)));
    const widthInBound = ((event.clientX >= parent.x) && (event.clientX <= (parent.x + parent.width)));
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
  ngOnDestroy(){
    document.removeEventListener("contextmenu",this.eventHandler);
  }

}
