import Phaser from 'phaser'
const VelozY = {
	1:500, 2:500, 3:500, 4:90, 5:100, 6:110, 7:500, 8:100, 9:120
  }
export default class Iza extends  Phaser.Physics.Arcade.Sprite
{
	constructor(vida, scene, x, y, velocidadY)
	{ 
		super(scene, x, y, 'cayendo1', 0)
		scene.add.existing(this);
		scene.physics.add.existing(this);
		this.vida=vida;
		this.scene=scene
		this.setVelocityY(VelozY[velocidadY])
		this.anims.play("caer1")

		
	}
	golpe(){
		this.vida-=1;
		{this.setTint(0xff0000);this.scene.time.delayedCall(200, () => this.clearTint())};
	}
}
