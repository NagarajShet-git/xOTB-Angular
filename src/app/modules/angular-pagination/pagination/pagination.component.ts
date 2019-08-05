import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-pagination-comp',
  templateUrl: './pagination.component.html',
  styleUrls: ['../styles.css','./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  // @Input() items: Array<any>;
  @Output() onPageChange = new EventEmitter<any>(true);
  @Input() setFontColor :string;
  @Input() initialPage = 1;
  @Input() pageSize;
  @Input() maxPages;
  @Input() pagingData: Array<any>;

  pager: any = {};
  ngOnInit() {
    if (this.pagingData && this.pagingData.length) {
      this.setPage(this.initialPage);
    }
  }
 paginate(
  totalItems: number,
  currentPage: number = 1,
  pageSize: number ,
  maxPages: number
) {
  let totalPages = Math.ceil(totalItems / pageSize);

  if (currentPage < 1) { 
      currentPage = 1; 
  } else if (currentPage > totalPages) { 
      currentPage = totalPages; 
  }

  let startPage: number, endPage: number;
  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }
  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
  return {
    totalItems: totalItems,
    currentPage: currentPage,
    pageSize: pageSize,
    maxPages: maxPages,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages
  };
}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.pagingData.currentValue !== changes.pagingData.previousValue) {
      this.setPage(this.initialPage);
    }
  }
  public setPage(page: number) {
    this.pager = this.paginate(this.pagingData.length, page, this.pageSize, this.maxPages);

    var pagingItems = this.pagingData.slice(this.pager.startIndex, this.pager.endIndex + 1);

    this.onPageChange.emit(pagingItems);
  }
}
