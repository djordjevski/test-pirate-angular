import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isError: boolean = false;
  data = [];

  loadData(){
    let request = new XMLHttpRequest();
    request.open("GET", "http://fake-hotel-api.herokuapp.com/api/hotels?count=5");
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        let data = JSON.parse(request.responseText);
        switch (request.status) {
          case 200:
          {
            this.isError = false;
            this.data = data;
          }
          break;
          case 500 :
          {
            this.isError = true;
            this.data = data;
          }
          break;
          default:
          {
            this.isError = false;
            this.data = [];
          }
        }
      }
    }
    request.send();
  }
  // LoadData()
}
