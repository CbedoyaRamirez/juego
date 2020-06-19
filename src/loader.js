class Loader extends Phaser.Scene {
    constructor() {
        super({ key: 'Loader' });
    }

    preload() {
        this.load.on('complete', () => {
            this.scene.start('ScenaPrincipal');
        });
        this.load.image("bici", "../assets/bici.png");
        this.load.image("perro", "../assets/perro.png");
        this.load.image("fondo", "../assets/fondo.jpg");
    }

}

export default Loader;