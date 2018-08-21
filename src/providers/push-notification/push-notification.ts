import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';

@Injectable()
export class PushNotificationProvider {

  constructor(
    private oneSignal: OneSignal,
    private platform: Platform
  ) {
    console.log('Hello PushNotificationProvider Provider');
  }

  init_pn() {

    if ( this.platform.is('cordova') ) {
      // 1. ID OneSignal  2. SenderID Firebase
      this.oneSignal.startInit('cce98e9f-96c7-4f85-9a44-570ba3b1c1ef', '232130546968');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
       console.log('Notificación recibida');
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log('Notificación abierta');
      });

      this.oneSignal.endInit();
    } else {
      console.log('One Signal cordova is not available on desktop');
    }

  }

}
