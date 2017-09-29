import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.scss']
})
export class ReviewItemComponent implements OnInit {
  @Input() item: {positive: boolean};
  itemClass: string = "review";

  constructor() {
  }

  setItemClass() {
    this.item.positive ? this.itemClass += " review--positive" : this.itemClass += " review--negative"; 
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.setItemClass();
  }

}
