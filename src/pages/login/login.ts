import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup'
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'psge-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email;
  password;
  rootPage:any;
  wrongPass = false;
  // wrongEmail;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoSignin(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password).then((data)=>{
      this.navCtrl.setRoot(TabsPage);
    })
    .catch((error) =>{
      // var errorCode = error.code;
      // // Handle Errors here.
      // if (errorCode === 'auth/wrong-password') {
      //   this.wrongPass = true;

      // } else {
        this.password = '';
           this.wrongPass=  true ;

      // }
      console.log("checklogin error",error);
      // ...
    });
    
    // this
  }

  gotoSignup(){
    this.navCtrl.setRoot(SignupPage);
  }

}
