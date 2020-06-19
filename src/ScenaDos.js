class ScenaDos extends Phaser.Scene {
    constructor() {
        super({ key: 'ScenaDos', active: true });
    }

    preload() {

    }

    create() {
        this.add.image(450, 150, 'fondoArizona');
        //this.fondoArizona.setScale(2)
    }

    update(time, delta) {
    }

}

export default ScenaDos;