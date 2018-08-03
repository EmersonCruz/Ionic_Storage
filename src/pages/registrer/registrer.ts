import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '../../models/user';

/**
 * Generated class for the RegistrerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrer',
  templateUrl: 'registrer.html',
})
export class RegistrerPage {
  user= {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfireAuth:AngularFireAuth) {
  }

  async register(user: User){
    try{
      const result=this.angularfireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
    
  }
}
