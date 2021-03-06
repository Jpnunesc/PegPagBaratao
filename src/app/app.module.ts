import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';





import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OutrosalimentosPage } from '../pages/outrosalimentos/outrosalimentos';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { VerdesPage } from '../pages/verdes/verdes';
import { CarnePage } from '../pages/carne/carne';
import { ContatoPage } from '../pages/contato/contato';



@NgModule({
  declarations: [

    MyApp,
    CarnePage,
    VerdesPage,
    BebidasPage,
    OutrosalimentosPage,
    ContatoPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CarnePage,
    VerdesPage,
    BebidasPage,
    OutrosalimentosPage,
    ContatoPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  
  ]
})
export class AppModule {}
