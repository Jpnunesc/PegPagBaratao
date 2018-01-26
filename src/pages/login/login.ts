import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { BebidasPage } from '../bebidas/bebidas';
import { VerdesPage } from '../verdes/verdes';
import { CarnePage } from '../carne/carne';
import { OutrosalimentosPage } from '../outrosalimentos/outrosalimentos';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  constructor(public navCtrl: NavController) { 
  
  }
 
  public carnes(){
    this.navCtrl.setRoot(CarnePage);
  }
  public verdes(){
    this.navCtrl.setRoot(VerdesPage);
  }
  public bebidas(){
    this.navCtrl.setRoot(BebidasPage);
  }
  public outros(){
    this.navCtrl.setRoot(OutrosalimentosPage);
  }
  
}