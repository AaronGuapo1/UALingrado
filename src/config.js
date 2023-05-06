export const baseUrl = (() => {
  switch (process.env.ENV) {
    case 'prod':
      return 'https://gamas.oss-cn-shanghai.aliyuncs.com/snowman-attack/1.0.0/'
    default:
      return './public/'
  }
})()

export const tips = {
  notLandscape: 'Si es un teléfono móvil, asegúrese de que esté en orientación horizontal. Si es una computadora, asegúrese de que el ancho de la página sea mayor que la altura.',
  notFullscreen: 'Haga clic en el botón de abajo para iniciar el juego'
}