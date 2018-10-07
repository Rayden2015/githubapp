import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { } from '../profile-search-results/profile-search-results';

/**
 * Generated class for the ProfileSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {
  username: string = "PaulHalliday";

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchPage');
  }

  getUserInformation():void{
    console.log("getUserInformation Button Clicked");
    this.navCtrl.push('ProfileSearchResultsPage');
  }
}
