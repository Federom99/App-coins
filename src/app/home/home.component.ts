import { Component } from '@angular/core';
import { CoinsServices } from '../coins/coins.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  coins:any;

  constructor(public coin: CoinsServices){}

  ngOnInit(){
    this.coin.getCoins().subscribe((r)=>{this.coins=r; console.log(r) },
    (e)=>{console.error(e)}
     )
  }

}
