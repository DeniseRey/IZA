import Phaser from 'phaser'

import { Preloads } from "./scenes/preloads";
import { Black } from "../src/scenes/Inicio.js";
import { MainMenu } from "../src/scenes/MainMenu.js";
import { Tuto } from "../src/scenes/Tutorial.js";
import { Creditos } from "../src/scenes/Creditos.js";
import { Inter } from "../src/scenes/Inter.js";


import HelloWorldScene from './scenes/HelloWorldScene'
import { Juego } from './scenes/Juego';

const config = {
	type: Phaser.AUTO,
  width: 640,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1250,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      
      debug: false,
    },
  },
	scene: [ Preloads, Black, MainMenu, Tuto, Creditos, Inter, Juego]
}

export default new Phaser.Game(config)
