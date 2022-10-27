import Phaser from 'phaser'

export default class Iza extends  Phaser.Physics.Arcade.Sprite
{
	constructor(vida, scene, x, y)
	{ 
		super(scene, x, y, 'cayendo', 0)
		scene.add.existing(this);
		scene.physics.add.existing(this);
		this.vida=vida;
		this.scene=scene
		this.setVelocityY(90)
		this.anims.play("caer")
	}
	golpe(){
		this.vida-=1;
		{this.setTint(0xff0000);this.scene.time.delayedCall(200, () => this.clearTint())};
	}
}
