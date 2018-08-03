import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user= {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfireAuth:AngularFireAuth, public toast: ToastController) {
  }
  register(){
    this.navCtrl.push('RegistrerPage');
  }
async  loginUser(user: User){
    try{
      const result=this.angularfireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
        this.navCtrl.setRoot(HomePage);
        console.log('Logueado');
      }
      else{
        console.log('Error de usuario o contraseña');
        this.toast.create({
          message: 'Error de usuario o contraseña',
          duration: 3000,

        }).present();

      }
    }
    catch(e){
      console.error(e);
    }
  }
}
