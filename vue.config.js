module.exports = {
  pwa: {
    name: 'Pomodoro Timer',
    themeColor: '#313B4B',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconsPaths: {
      favicon32: 'icons/favicon-32x32.png',
      favicon16: 'icons/favicon-16x16.png',
      appleTouchIcon: 'icons/icon-152x152.png',
      // maskIcon: 'icons/safari-pinned-tab.svg',
      msTileImage: 'icons/icon-144x144.png'
    },
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  }
}