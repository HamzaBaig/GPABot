import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage } from '../login/login';
import {TabsPage} from '../tabs/tabs';
import { Http, RequestOptions ,Headers ,HttpModule  } from '@angular/http';
/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Injectable()
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  username;
  email;
  password;
  constructor(public navCtrl: NavController, public navParams: NavParams , public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  back(){
    this.navCtrl.setRoot(LoginPage);
  }
  gotoSignup(){
    console.log("signup");
    let url = 'https://us-central1-checking-67161.cloudfunctions.net/createUser';
    var headers = new Headers()
    headers.append(
      'Content-Type', 'application/json'  
    )
    let obj = {
      "name": this.username,
      "email": this.email,
      "password": this.password
    }
    var data = JSON.stringify(obj);
    console.log("obj",obj)
    this.http.post(url,obj,{ headers: headers }).subscribe((data)=>{
      console.log("done");
      this.navCtrl.setRoot(TabsPage);
    })
  }
}
