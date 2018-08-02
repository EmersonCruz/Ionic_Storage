import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
inputText:string;
key:string="User";
lista=[];
items=[];
listUsr=[{tittle:null, description:null}]

constructor(public navCtrl: NavController, private storage: Storage) {

  }
saveData(nombre){
  
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
  
}
}
