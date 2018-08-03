import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
/*import { Storage } from '@ionic/storage';*/
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
/*inputText:string;
key:string="User";
lista=[];
items=[];
listUsr=[{tittle:null, description:null}]*/

constructor(public navCtrl: NavController, /*private storage: Storage,*/ public navParams: NavParams, private angularfireAuth:AngularFireAuth, private toast: ToastController ) {

  }

  ionViewDidLoad(){
    this.angularfireAuth.authState.subscribe(data=>{
      if(data && data.email && data.uid){
        this.toast.create({
          message: 'Bienvenido '+data.email,
          duration: 3000,
          position: 'top'
        }).present();
      }else{
         this.toast.create({
           message: 'Error de Login',
           duration: 3000,
           position: 'top'
         }).present();
        }
        console.log(data);
      }) 
  }
/*saveData(nombre){
  
  this.lista.push(this.listUsr);
  this.storage.set(this.key, this.lista);
}
getData(){
  
  for (let i = 1; i < 5; i++) {
    this.items.push({
      t: this.storage.get(this.key[i]),
      d: this.storage.get(this.lista[i])
      
    });
  }
  
}*/
}
