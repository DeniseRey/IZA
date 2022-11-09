var score;
import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import { DE_DE, EN_US, ES_AR, PT_BR } from './Servicios/languajes'
import { getTranslations, getPhrase } from "./Servicios/traducciones";
export class Win extends Phaser.Scene {
  constructor() {

    super("Win");
  }

  init(data) {

    score = data.score;
  }

  preload()
	{
		const fonts = new WebFontFile(this.load, 'Lilita One')
		this.load.addFile(fonts)
	}

  create() {

    this.music = this.sound.add("victory");
    var musicConfig = {
      mute: false,
      volume: 0.2,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    }

    this.music.play(musicConfig);

    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'win').setScale(0.65,0.65);
    this.add.image(300, 255, 'izawin').setScale(0.70);
    this.add.image(this.cameras.main.centerX, 485, 'ventanamiel').setScale(0.95,0.95);
    this.add.text(this.cameras.main.centerX, 493,
      ` ${score}`, {fontFamily: "arial",fontSize: "22px",
      }).setOrigin(0.5);
   
   
      const boton2 = this.add.sprite(50,  550, 'back1').setInteractive({cursor: "pointer"})
      boton2.on('pointerover', function(){boton2.setTexture('back2')})
      boton2.on('pointerout', function(){boton2.setTexture('back1')})
      boton2.on('pointerdown', () => {this.scene.start("MainMenu")})

    this.add.text(this.cameras.main.centerX, 55, getPhrase('¡LO LOGRASTE!'), {
      fontFamily: 'Lilita One',
      fontSize: '65px',
      color: '#FFEB67',
      stroke: '#CC2B7B',
      strokeThickness: 9,
      resolution: 2
    }).setOrigin(0.5)
   
    this.add.text(this.cameras.main.centerX, 428, getPhrase('MIEL RECOLECTADA:'), {
			fontFamily: 'Lilita One',
			fontSize: '38px',
			color: '#FFDFAF',
			stroke: '#CD2A7C',
			strokeThickness: 7
		}).setOrigin(0.5)

    
  
  }
}