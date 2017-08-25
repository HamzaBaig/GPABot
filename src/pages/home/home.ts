import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 import { Http, Headers } from "@angular/http";
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  msg;
  imgurl;
    //char;
  arr = [];
  convo: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,private http: Http, private db: AngularFireDatabase) {
    this.convo = this.db.list('/conversation',{preserveSnapshot: true});
    this.convo.subscribe(snapshots =>{
      this.arr = [];
      snapshots.forEach(element => {
       
        this.arr.push(element.val());
        console.log("objjjj",this.arr);
      });
    })
  }
  sendMessage(){
    console.log(this.msg);
    let send = {name: 'you' , imgurl: '../assets/images/user.png', msg: this.msg}
    this.db.list('/conversation').push(send);
    this.sendBot();
    this.msg = '';
  }
  sendBot(){
    let bot = {name: 'bot' , imgurl: '../assets/images/bot.png' , msg: ''}
    let headers = new Headers()
    headers.append(
      'Authorization' , 'Bearer 0fc57fb62042401a9d56268a993ce643'
    )
    this.http.get('https://api.api.ai/v1/query?v=20150910&query=' + this.msg + '&lang=en&sessionId=a5292bd2-3af8-4ea2-b8b2-614db278e333&timezone=Asia/Karachi',{headers: headers})
    .subscribe((response)=>{
      bot.msg = response.json().result.fulfillment.speech;
      this.db.list('/conversation').push(bot);
    })
  }
  check(event){
    //console.log("evenntttt",event);
    var char = event[event.length-1];
    //event = event.substring(0,-1);
   
    if(char.charCodeAt(0) == 13){
      console.log("char",char);
      this.sendMessage();
    }
    
  }
}
