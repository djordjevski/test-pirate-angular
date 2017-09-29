import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() starsCount: number;
  @Input() max: number;
  blanksCount: number;

  constructor() {
  }

  setBlanksCount() {
    this.blanksCount = this.max - this.starsCount;
  }

  numberToArray(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.setBlanksCount();
  }
}
