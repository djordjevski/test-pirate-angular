import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.scss']
})
export class HotelItemComponent implements OnInit {
  @Input() item: {};
  isReviewsDisplayed: boolean = false;
  reviews = [];

  constructor(private sanitizer: DomSanitizer) {
  }

  getCoverImage(images) {
    let coverImageUrl: string = images[0];
    let coverImageUrl_S = this.sanitizer.bypassSecurityTrustResourceUrl(coverImageUrl);
    return coverImageUrl_S;
  }

  getCoverBgImage(images) {
    let coverImageUrl: string = images[0];
    let coverImageUrl_S = this.sanitizer.bypassSecurityTrustStyle(`url(${coverImageUrl})`);
    return coverImageUrl_S;
  }

  formatDate(isoDate){
    let rawDate = new Date(isoDate);
    return `${rawDate.getDate()}.${(rawDate.getMonth() + 1)}.${rawDate.getFullYear()}`;
  }

  toggleReviews(event){
    let request = new XMLHttpRequest();
    request.open("GET", `http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${event.target.dataset.id}`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        this.isReviewsDisplayed = !this.isReviewsDisplayed;
        this.reviews = data;
      }
    }
    request.send();
  }

  ngOnInit() {
  }

}
