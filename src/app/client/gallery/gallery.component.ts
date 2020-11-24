import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
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
    private httpClient: HttpClient,
    @Inject(PLATFORM_ID) platformId: string
  ) {

    // alert(platformId);
    // alert(isPlatformBrowser(platformId));
    console.log(platformId);
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

  ff() {
    this.httpClient.get<any>('https://api.privatbank.ua/p24api/pubinfo?exchange4&json&coursid=11').subscribe(res => {
      console.log('ff', res);
      this.data = res;
    });
  }

}
