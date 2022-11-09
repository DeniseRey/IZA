import Phaser from 'phaser'

import { Preloads } from "./scenes/preloads";
import { Black } from "../src/scenes/Inicio.js";
import { MainMenu } from "../src/scenes/MainMenu.js";
import { Tuto } from "../src/scenes/Tutorial.js";
import { Creditos } from "../src/scenes/Creditos.js";
import { Inter } from "../src/scenes/Inter.js";
import { Lost } from './scenes/lost';
import { Win } from './scenes/win';
import { Juego } from './scenes/Juego';
import { guiaprimero } from './scenes/guiaprimero';
import { guiasegundo } from './scenes/guiasegundo';
import { Idioma } from './scenes/idioma';


const config = {
	type: Phaser.AUTO,
  width: 640,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 740,
      height: 640,
    },
    max: {
      width: 1040,
      height: 940,
    }
  },
  physics: {
    default: "arcade",
    arcade: {
      
      debug: false,
    },
  },
	scene: [ Preloads, Black, MainMenu, Tuto, guiaprimero, guiasegundo, Creditos, Idioma, Inter, Juego, Lost, Win]
}

export default new Phaser.Game(config)
