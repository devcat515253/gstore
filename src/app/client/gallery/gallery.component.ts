import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  cash = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
  card = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

  data: any[] = [];
  data2: any[] = [];

  constructor(
    private httpClient: HttpClient
  ) {

    console.log(environment.production);
  }

  ngOnInit(): void {
    this.httpClient.get<any>(this.cash).subscribe(res => {
      console.log('cash', res);
      this.data = res;
    });

    this.httpClient.get<any>(this.card).subscribe(res => {
      console.log('online', res);
      this.data2 = res;
    });
  }

}
