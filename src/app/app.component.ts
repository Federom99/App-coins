import { Component, OnInit } from '@angular/core';
import { CoinsServices } from './coins/coins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // coins:any;

  // constructor(public coin: CoinsServices){}

  // ngOnInit(){
  //   this.coin.getCoins().subscribe((r)=>{this.coins=r; console.log(r) },
  //   (e)=>{console.error(e)}
  //    )
  // }
}
