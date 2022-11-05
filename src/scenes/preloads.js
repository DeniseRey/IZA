
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
      this.load.image("hit1","assets/imagenes/izahit1.png");
      this.load.image("hit2","assets/imagenes/izahit2.png");
      this.load.image("hit3","assets/imagenes/izahit3.png");
      this.load.image("quiet1","assets/imagenes/izaquieto.png");
      this.load.image("quiet2","assets/imagenes/izaquieto2.png");
      this.load.image("quiet3","assets/imagenes/izaquieto3.png");
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
      this.load.image("tutorial", "assets/imagenes/EjTuto.png");
      this.load.image("invisible", "assets/tilemaps/invisible.png");
      this.load.image("primero", "assets/imagenes/izaquietoprimero.png");

      
      this.load.audio("gota", "assets/sounds/gota.mp3");
      this.load.audio("hit", "assets/sounds/hit.mp3");
      this.load.audio("musica1", "assets/sounds/musicalvl1.mp3");
      this.load.audio("musica3", "assets/sounds/musicalvl2.mp3");
      this.load.audio("mainmusic", "assets/sounds/mainmenumusic.mp3");
      this.load.audio("musica2", "assets/sounds/musicalvl3.mp3");
      this.load.audio("victory", "assets/sounds/victoriasound.mp3");
      this.load.audio("fail", "assets/sounds/fail.mp3");
      this.load.audio("lose", "assets/sounds/lose.mp3");
      
      
      this.load.spritesheet("avispa1", "assets/imagenes/spriteavispa.png", {
        frameWidth: 45,
        frameHeight: 45,
      });
      this.load.spritesheet("avispa2", "assets/imagenes/spriteavispamiel.png", {
        frameWidth: 57,
        frameHeight: 52,
      });
      this.load.spritesheet("cayendo1", "assets/imagenes/sprite1.png", {
        frameWidth: 86,
        frameHeight: 65,
      });
      this.load.spritesheet("moverse1", "assets/imagenes/sprite2.png", {
        frameWidth: 86,
        frameHeight: 65,
      });
      this.load.spritesheet("escudo", "assets/imagenes/sprite5.png", {
        frameWidth: 133,
        frameHeight: 123,});
      this.load.spritesheet("cayendo2", "assets/imagenes/sprite3.png", {
        frameWidth: 87,
        frameHeight: 65,});
      this.load.spritesheet("cayendo3", "assets/imagenes/sprite6.png", {
        frameWidth: 87,
        frameHeight: 65,});
      this.load.spritesheet("tornado", "assets/imagenes/sprite8.png", {
        frameWidth: 66,
        frameHeight: 95,});
      this.load.spritesheet("moverse2", "assets/imagenes/sprite4.png", {
        frameWidth: 87,
        frameHeight: 65,});
      this.load.spritesheet("moverse3", "assets/imagenes/sprite7.png", {
        frameWidth: 86,
        frameHeight: 65,});
      this.load.spritesheet("poof", "assets/imagenes/poof.png", {
        frameWidth: 59,
        frameHeight: 55,});
        
      this.load.tilemapTiledJSON("map1", "assets/tilemaps/mapaideaiza.json");
      this.load.image("tilesBelow1", "assets/tilemaps/fondo1.png");
      this.load.image("tilesPlatform1", "assets/tilemaps/plataforma1.png");
      this.load.tilemapTiledJSON("map2", "assets/tilemaps/mapaideaiza2.json");
      this.load.image("tilesBelow2", "assets/tilemaps/fondo2.png");
      this.load.image("tilesPlatform2", "assets/tilemaps/plataforma2.png");
      this.load.tilemapTiledJSON("map3", "assets/tilemaps/mapaideaiza3.json");
      this.load.image("tilesBelow3", "assets/tilemaps/fondo3.png");
      this.load.image("tilesPlatform3", "assets/tilemaps/plataforma3.png");
      this.load.tilemapTiledJSON("map4", "assets/tilemaps/mapaideaiza4.json");
      this.load.image("tilesBelow4", "assets/tilemaps/fondo4.png");
      this.load.image("tilesPlatform4", "assets/tilemaps/plataforma4.png");
      this.load.tilemapTiledJSON("map5", "assets/tilemaps/mapaideaiza5.json");
      this.load.image("tilesBelow5", "assets/tilemaps/fondo5.png");
      this.load.image("tilesPlatform5", "assets/tilemaps/plataforma5.png");
      this.load.tilemapTiledJSON("map6", "assets/tilemaps/mapaideaiza6.json");
      this.load.image("tilesBelow6", "assets/tilemaps/fondo6.png");
      this.load.image("tilesPlatform6", "assets/tilemaps/plataforma6.png");
      this.load.tilemapTiledJSON("map7", "assets/tilemaps/mapaideaiza7.json");
      this.load.image("tilesBelow7", "assets/tilemaps/fondo7.png");
      this.load.image("tilesPlatform7", "assets/tilemaps/plataforma7.png");
      this.load.tilemapTiledJSON("map8", "assets/tilemaps/mapaideaiza8.json");
      this.load.image("tilesBelow8", "assets/tilemaps/fondo8.png");
      this.load.image("tilesPlatform8", "assets/tilemaps/plataforma8.png");
      this.load.tilemapTiledJSON("map9", "assets/tilemaps/mapaideaiza9.json");
      this.load.image("tilesBelow9", "assets/tilemaps/fondo9.png");
      this.load.image("tilesPlatform9", "assets/tilemaps/plataforma9.png");
      
    }
  
    create() {
  
      this.anims.create({
        key: "left1",
        frames: this.anims.generateFrameNumbers("moverse1", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "left2",
        frames: this.anims.generateFrameNumbers("moverse2", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "left3",
        frames: this.anims.generateFrameNumbers("moverse3", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "caer1",
        frames: this.anims.generateFrameNumbers("cayendo1", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "caer2",
        frames: this.anims.generateFrameNumbers("cayendo2", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "caer3",
        frames: this.anims.generateFrameNumbers("cayendo3", { start: 0, end: 5 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "right1",
        frames: this.anims.generateFrameNumbers("moverse1", { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "right2",
        frames: this.anims.generateFrameNumbers("moverse2", { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "right3",
        frames: this.anims.generateFrameNumbers("moverse3", { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "mala1",
        frames: this.anims.generateFrameNumbers("avispa1", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
      this.anims.create({
        key: "mala2",
        frames: this.anims.generateFrameNumbers("avispa2", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });
  
      this.anims.create({
        key: "quieto1",
        frames: [{ key: "quiet1", frame: 0 }],
        frameRate: 20,
      });
      this.anims.create({
        key: "quieto2",
        frames: [{ key: "quiet2", frame: 0 }],
        frameRate: 20,
      });
      this.anims.create({
        key: "quieto3",
        frames: [{ key: "quiet3", frame: 0 }],
        frameRate: 20,
      });
  
      this.anims.create({
        key: "golpe1",
        frames: [{ key: "hit1", frame: 0 }],
        frameRate: 20,
      });
      this.anims.create({
        key: "golpe2",
        frames: [{ key: "hit2", frame: 0 }],
        frameRate: 20,
      });
      this.anims.create({
        key: "golpe3",
        frames: [{ key: "hit3", frame: 0 }],
        frameRate: 20,
      });

      this.anims.create({
        key: "shield",
        frames: this.anims.generateFrameNumbers("escudo", { start: 0, end: 30 }),
        frameRate: 12,
        repeat: -1,
      });
      this.anims.create({
        key: "spin",
        frames: this.anims.generateFrameNumbers("tornado", { start: 0, end: 26 }),
        frameRate: 12,
        repeat: -1,
      });
      this.anims.create({
        key: "pof",
        frames: this.anims.generateFrameNumbers("poof", { start: 0, end: 3 }),
        frameRate: 8,
        repeat: -1,
      });
    
      this.scene.start("Black");
    }
  }
  