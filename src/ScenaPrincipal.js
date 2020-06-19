import ScenaDos from "../src/ScenaDos.js";

class ScenaPrincipal extends Phaser.Scene {
    constructor() {
        super({ key: 'scenaPrincipal' });
    }


    preload() {
        this.load.image("bici", "../assets/bici.png");
        this.load.image("perro", "../assets/perro.png");
        this.load.image("fondo", "../assets/fondo.jpg");
        this.load.image("fondoArizona", "../assets/arizona.jpg");
    }

    create() {

        //fondo
        this.fondo = this.add.image(450, 150, 'fondo');
        this.fondo.setScale(2)

        //bici        
        this.bici = this.physics.add.image(0, 430, 'bici');

        //perro
        this.perro = this.physics.add.image(600, 430, 'perro');
        this.perro.setCollideWorldBounds(true);
        this.perro.setVelocityY(-380);
        this.perro.setBounce(1);


        this.cursor = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.perro, this.bici, this.cambiarScena, null, this);
    }

    cambiarScena() {
        this.scene.add("ScenaDos", new ScenaDos);
    }

    update(time, delta) {
        if (this.cursor.right.isDown) {
            this.bici.x += 10;
        }
        if (this.cursor.down.isDown) {
            this.bici.y++;
        }
        if (this.cursor.up.isDown) {
            this.bici.y--;
        }
    }

}

export default ScenaPrincipal;