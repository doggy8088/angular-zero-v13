import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  item: any;

  orig_item: any;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;
  newTitle = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['item']) {
      this.orig_item = changes['item'].currentValue;
      this['item'] = Object.assign({}, changes['item'].currentValue);
    }
  }

  ngOnDestroy() {
  }

  doEdit(title: string) {
    this.titleChanged.emit(this.item);
  }

  doCancel() {
    this.item = Object.assign({}, this.orig_item);
    this.isEdit = false;
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }
}
