import Loader from '../src/loader.js';
import ScenaPrincipal from '../src/ScenaPrincipal.js';

const config = {
    width: 300 * 2.5,
    height: 180 * 3,
    parent: 'container',
    type: Phaser.AUTO,
    scene: [
        ScenaPrincipal
    ],
    physics: {
        default: 'arcade',
    }
}

new Phaser.Game(config);


