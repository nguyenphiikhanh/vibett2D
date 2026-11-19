import { Scene } from 'phaser'
import { EventBus } from '../EventBus'

export class MainScene extends Scene {
  constructor() {
    super('MainScene')
  }

  create() {
    EventBus.emit('scene-ready', this)
  }
}
