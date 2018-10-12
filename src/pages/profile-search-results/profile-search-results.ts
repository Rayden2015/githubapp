import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';


/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user: User;
  repository: Repository[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private github: GithubServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchResultsPage');
    this.username = this.navParams.get('username');
    if(this.username){
      this.getUserInformation();
    }else{
      console.log("No username received from navParams");
    }
    
  }

  getUserInformation(): void{
    this.github.getUserInformation(this.username).subscribe(data=> console.log(data));   
    //this.github.mockGetUserInformation(this.username).subscribe(data=> console.log(data));   
   
    
    // this.github.mockGetUserInformation(this.username).subscribe((data: User)=>{
    //     console.log("User information : "+JSON.stringify(data));
    //     this.user = data;
    // });

    // this.github.mockGetRepositoryInformation(this.username).subscribe((data: Repository[])=>{
    //   console.log("Repositories of "+ this.user.name+":"+ JSON.stringify(data));
    //   this.repository = data;
    // })

  }




}
