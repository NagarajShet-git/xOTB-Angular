import { Component, OnInit } from '@angular/core';
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
    pagingItems: Array<any>;

    constructor(public GetService : ApiService, private http: HttpClient) {
    this.GetService.getConfig().subscribe(
      result => {this.results = result;   console.log(this.results) },
       err => console.error(err),
         () => console.log('completed') );

     }
onChangePage(pagingItems: Array<any>) {
        this.pagingItems = pagingItems;
    }

     ngOnInit() {


 }
}
