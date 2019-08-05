import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {ApiService} from './api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './angular-pagination.component.html',
  styleUrls: [ './styles.css','./angular-pagination.component.css' ]
})

export class PagComponent implements OnInit {
    items: Array<any>;
    results:any;
    pagingItems:Array<any>;
    @Input() cardHeader:String;
    @Input() bodyStyle:String;
    @Input() pageSize;
    @Input() maxPages;
    @Input() pagingData:Array<any>;
    @Input() title:String;
    @Output() onPageChange = new EventEmitter<any>(true);

    pageChangeEvent(pagingItems: Array<any>) {
        this.pagingItems = pagingItems;
        this.onPageChange.emit(pagingItems);
    }

    ngOnInit() {
      this.cardHeader = this.cardHeader || "xOTB-card-header";
      this.bodyStyle = this.bodyStyle|| "xOTB-page-body";
      this.pageSize = this.pageSize || 5;
      this.maxPages = this.maxPages || 20;
    }
}
