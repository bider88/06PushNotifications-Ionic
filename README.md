# Push Notifications

Usando los servicios de One Signal para las push notifications en Ionic.

1. En el enlace de [onesignal docs](https://documentation.onesignal.com/docs/ionic-sdk-setup) podemos ver lo que se necesita para el uso de la **pn**.
2. Crear una cuenta en [onesignal](https://onesignal.com/). Depués crear un proyecto.
3. Crear un proyecto en [Firebase](https://console.firebase.google.com). En el que usaremos el **server key** y el **sender id** en la pestaña de Cloud Messaging.
4. En [Ionic Native](https://ionicframework.com/docs/native/onesignal/) vemos lo que se necesita para instalar los plugins nativos.
### Agregar elementos nativos para el uso de push notifications
```
$ ionic cordova plugin add onesignal-cordova-plugin
$ npm install --save @ionic-native/onesignal

```

5. Exportar la app para Android e IOS:
  - IOS
  ```
  $ ionic cordova platform add ios --save
  $ ionic cordova build ios

  ```

  - Android
  ```
  $ ionic cordova platform add android --save
  $ ionic cordova build android

  ```

### Nota:
Make sure to install and update the following under Extras:
Verificar en Android SDK que se tengan instalado las siguientes herramientas:

- Android Support Repository
- Google Repository

![](https://files.readme.io/cfbZBwxSmeToNEbZJoz0_AndroidSDKGoogleRepository.png)

