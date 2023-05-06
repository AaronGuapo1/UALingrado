import Phaser from 'phaser'

export default class EnemySnowball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key, frame) {
    super(scene, x, y, key, frame)

    this.setScale(0.5)

    this.gameWidth = scene.game.config.width
  }

  fire(x, y) {
    this.body.enable = true
    this.body.reset(x + 10, y - 44)

    this.setActive(true)
    this.setVisible(true)

    this.setVelocityX(200)
  }

  stop() {
    this.setActive(false)
    this.setVisible(false)

    this.setVelocityX(0)

    this.body.enable = false
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta)

    if (this.x >= this.gameWidth - 54) {
      this.stop()
      console.log('snowball gameover ', Date.now())
      this.scene.gameOver()
    }
  }
}