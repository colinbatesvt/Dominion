import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../../Common/src/card';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() shop: Record<string, Card[]>;

  basicCards: Card[][];
  kingdomCards: Card[][];
  constructor() {
    this.basicCards = [];
    this.kingdomCards = [];
  }

  ngOnInit() {
    // TODO: why don't they like this?
    // tslint:disable-next-line:forin
    for (const item in this.shop) {
      if (this.shop[item][0].isKingdom)
      {
        this.kingdomCards.push(this.shop[item]);
      }
      else
      {
        this.basicCards.push(this.shop[item]);
      }
    }
  }

}
