import { Component } from '@angular/core';
import {UsersPage} from "../users/users";
import {ShopPage} from "../Shop/shop";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shopPage=ShopPage;
  constructor(private navCtrl:NavController){}

  onGoToUsers(){
    this.navCtrl.push(UsersPage)
      .catch((error)=>console.log("access denied"+error));
  }
}
