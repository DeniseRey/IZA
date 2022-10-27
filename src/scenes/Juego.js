import Button from "../scenes/Botones/button.js";
import Iza from "./Personajes/Iza.js";
import Enemigos from "./Personajes/Enemigo.js"
import Recolectable from "./Recolectable/Recolectable.js";

var cursors;
var gameOver;



export class Juego extends Phaser.Scene {
  Enemigos=[];
  Recolectables=[];
  constructor() {

    super("Juego");
  }

  init (data) {
    this.score = data.score; 
    this.nivel=data.nivel
    this.vida=3
    
  }

    create() {
      this.cameras.main.setBounds(0, 0, 640, 4288);
      
      const map = this.make.tilemap({ key: "map" });


      const tilesetBelow = map.addTilesetImage("fondo1", "tilesBelow");
    const tilesetPlatform = map.addTilesetImage(
      "plataformas",
      "tilesPlatform"
    );

    const belowLayer = map.createLayer("fondo1", tilesetBelow, 0, 0);
    const worldLayer = map.createLayer("plataformas", tilesetPlatform, 0, 0);
    const objectsLayer = map.getObjectLayer("Objetos"); 

    if ((cursors = !undefined)) {
      cursors = this.input.keyboard.createCursorKeys();
    }


    objectsLayer.objects.forEach((objData) => {
      console.log(objData);
      const { x = 0, y = 0, name, type } = objData;
      switch (name) {

        case "abeja": 
          this.Enemigos.push(new Enemigos(this, x, y)) ;
          break;
        
        case "IZA": 
          this.iza= new Iza(this.vida, this, x, y);
          break; 

        case "miel": 
          this.Recolectables.push(new Recolectable(this, 10, x, y));
          break;


      }
    });

    this.cameras.main.startFollow(this.iza, true, 0.25, 0.25);
    this.cameras.main.setZoom(1);

    this.physics.add.overlap(this.iza, this.Recolectables, this.collectMiel, null, this);
    this.physics.add.overlap(this.iza, this.Enemigos, this.hitiza, null, this);
    
  
  }

  collectMiel(player,miel){
    miel.destroy();
  }
  hitiza(player,enemigo){
    player.golpe();
  }
}

