
export class Preloads extends Phaser.Scene {
    constructor() {
  
      super("Preloads");
    }
  
    preload() {
      this.load.image("iza_logo", "assets/imagenes/titulo2.png");
      this.load.image("creditos", "assets/imagenes/creditosback.png");
      this.load.image("tutorial", "assets/imagenes/tutorialback.png");
      this.load.image("principal","assets/imagenes/principalIza1.png");
      this.load.image("mariposa","assets/imagenes/Iza.png");
      this.load.image("win","assets/imagenes/victoria.png");
      this.load.image("lost","assets/imagenes/derrota.png");
      this.load.image("izawin","assets/imagenes/izavic.png");
      this.load.image("izalost","assets/imagenes/izalos.png");
      this.load.image("miel","assets/imagenes/miel.png");
      this.load.image("avispa","assets/imagenes/avispa1.png");
      this.load.image("playbutton","assets/imagenes/jugar.png");
      this.load.image("playbutton1","assets/imagenes/jugar2.png");
      this.load.image("guiabutton","assets/imagenes/guia.png");
      this.load.image("guiabutton1","assets/imagenes/guia2.png");
      this.load.image("retrybutton","assets/imagenes/retry.png");
      this.load.image("retrybutton1","assets/imagenes/retry2.png");
      this.load.image("flechabutton","assets/imagenes/flecha.png");
      this.load.image("flechabutton1","assets/imagenes/flechaclaro.png");
      this.load.image("creditosbutton","assets/imagenes/creditos.png");
      this.load.image("creditosbutton1","assets/imagenes/creditos2.png");
      this.load.image("atrasbutton","assets/imagenes/atras.png");
      this.load.image("hit2","assets/imagenes/izahit2.png");
      this.load.image("quiet","assets/imagenes/izaquieto.png");
      this.load.image("inter1","assets/imagenes/inter1.png");
      this.load.image("inter2","assets/imagenes/inter2.png");
      this.load.image("inter3","assets/imagenes/inter3.png");
      this.load.image("click","assets/imagenes/click.png");
      this.load.image("atrasbutton1","assets/imagenes/atras2.png");
      this.load.image("avispasola","assets/imagenes/avispa1.png");
      this.load.image("black","assets/imagenes/negro.png");
      this.load.image("vidas","assets/imagenes/vidastext.png");
      this.load.image("mielrecolectada","assets/imagenes/mielrecolectada.png")
      this.load.image("ventana","assets/imagenes/ventana.png")
      this.load.image("ventanamiel","assets/imagenes/ventanamiel.png")
      this.load.spritesheet("avispa1", "assets/imagenes/spriteavispa.png", {
        frameWidth: 45,
        frameHeight: 45,
      });
      this.load.spritesheet("cayendo", "assets/imagenes/sprite1.png", {
        frameWidth: 86,
        frameHeight: 65,
      });
      this.load.spritesheet("moverse", "assets/imagenes/sprite2.png", {
        frameWidth: 86,
        frameHeight: 65,
      });
      this.load.tilemapTiledJSON("map", "assets/tilemaps/mapaideaiza.json");
      this.load.image("tilesBelow", "assets/tilemaps/fondo1.png");
      this.load.image("tilesPlatform", "assets/tilemaps/plataformas.png");
      this.load.tilemapTiledJSON("map2", "assets/tilemaps/mapaideaiza2.json");
      this.load.image("tilesBelow2", "assets/tilemaps/fondo2.png");
      this.load.image("tilesPlatform2", "assets/tilemaps/plataformas1.png");
      this.load.tilemapTiledJSON("map3", "assets/tilemaps/mapaideaiza3.json");
      this.load.image("tilesBelow3", "assets/tilemaps/fondo3.png");
      this.load.image("tilesPlatform3", "assets/tilemaps/plataforma6.png");
      this.load.image("tutorial", "assets/imagenes/EjTuto.png");
      this.load.audio("gota", "assets/sounds/gota.mp3");
      this.load.audio("hit", "assets/sounds/hit.mp3");
      this.load.audio("musica1", "assets/sounds/musicalvl1.mp3");
      this.load.audio("musica2", "assets/sounds/musicalvl2.mp3");
      this.load.audio("musica3", "assets/sounds/mainmenumusic.mp3");
      this.load.audio("musica4", "assets/sounds/musicalvl3.mp3");
      this.load.audio("victory", "assets/sounds/victoriasound.mp3");
      this.load.audio("fail", "assets/sounds/fail.mp3");
      this.load.audio("lose", "assets/sounds/lose.mp3");
    }
  
    create() {
  
      this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("moverse", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "caer",
        frames: this.anims.generateFrameNumbers("cayendo", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("moverse", { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "mala",
        frames: this.anims.generateFrameNumbers("avispa1", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "quieto",
        frames: [{ key: "quiet", frame: 0 }],
        frameRate: 20,
      });
  
      this.anims.create({
        key: "golpe",
        frames: [{ key: "hit2", frame: 0 }],
        frameRate: 20,
      });
    
      this.scene.start("Black");
    }
  }
  