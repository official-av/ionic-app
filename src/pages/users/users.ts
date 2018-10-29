import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {UserPage} from "./user/user";

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(private navCtrl:NavController){}

  onLoadUser(name:string){
    this.navCtrl.push(UserPage,{userName:name});
  }

  ionViewCanEnter():boolean|Promise<boolean>|Promise<void>{
    const rnd=Math.random();
    console.log('ionViewController '+rnd);
    return rnd>0.5;
  }

}
