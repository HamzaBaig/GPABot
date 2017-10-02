import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  rootpage: any;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  //tab4Root = LoginPage;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {
  }
  
  myMethod(){
    console.log("checlllklkkkkkkk");
    // this.rootpage = LoginPage;
    this.afAuth.auth.signOut().then(value => {
      // Sign-out successful.
      this.navCtrl.push(LoginPage);
    }).catch(function(error) {
      // An error happened.
    });
    
  }
}
