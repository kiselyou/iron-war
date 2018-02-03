import {THREE} from './../../../../api';
import SPE from 'shader-particle-engine';

class ShaderFire {
    constructor() {

        this.ageTime = 0.5;

        new THREE.TextureLoader();

        this.group = new SPE.Group({
            texture: {
                value: new THREE.TextureLoader().load('./textures/sprites/sprite-explosion2.png'),
                frames: new THREE.Vector2(5, 5),
                loop: 1
            },
            depthTest: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            scale: 600,
            maxParticleCount: 200,
        });

        this.shockwaveGroup = new SPE.Group({
            texture: {
                value: new THREE.TextureLoader().load('./textures/sprites/smokeparticle.png'),
            },
            depthTest: false,
            depthWrite: true,
            blending: THREE.NormalBlending,
            maxParticleCount: 200,
        });

        this.shockwave = new SPE.Emitter({
            particleCount: 200,
            type: SPE.distributions.DISC,
            position: {
                radius: 5,
                spread: new THREE.Vector3(5)
            },
            maxAge: {
                value: 2,
                spread: 0
            },
            // duration: 1,
            activeMultiplier: 2000,
            velocity: {
                value: new THREE.Vector3(40)
            },
            rotation: {
                axis: new THREE.Vector3(1, 0, 0),
                angle: Math.PI * 0.5,
                static: true
            },
            size: {
                value: 2
            },
            color: {
                value: [
                    new THREE.Color(0.4, 0.2, 0.1),
                    new THREE.Color(0.2, 0.2, 0.2)
                ]
            },
            opacity: {
                value: [0.5, 0.2, 0]
            }
        });

        this.debris = new SPE.Emitter({
            particleCount: 100,
            type: SPE.distributions.SPHERE,
            position: {
                radius: 0.1,
            },
            maxAge: {
                value: 2
            },
            // duration: 2,
            activeMultiplier: 40,
            velocity: {
                value: new THREE.Vector3(100)
            },
            acceleration: {
                value: new THREE.Vector3(0, -20, 0),
                distribution: SPE.distributions.BOX
            },
            size: {
                value: 2
            },
            drag: {
                value: 1
            },
            color: {
                value: [
                    new THREE.Color(1, 1, 1),
                    new THREE.Color(1, 1, 0),
                    new THREE.Color(1, 0, 0),
                    new THREE.Color(0.4, 0.2, 0.1)
                ]
            },
            opacity: {
                value: [0.5, 0]
            }
        });

        this.fireball = new SPE.Emitter({
            particleCount: 10,
            duration: 0.5,
            type: SPE.distributions.SPHERE,
            position: {
                radius: 1
            },
            maxAge: {
                value: 0.5
            },
            activeMultiplier: 10,
            velocity: {
                value: new THREE.Vector3(30)
            },
            size: {
                value: [20, 500]
            },
            color: {
                value: [
                    new THREE.Color(0.5, 0.1, 0.05),
                    new THREE.Color(0.2, 0.2, 0.2)
                ]
            },
            opacity: {
                value: [0.5, 0.35, 0.2, 0.1, 0]
            }
        });

        this.mist = new SPE.Emitter({
            particleCount: 50,
            position: {
                spread: new THREE.Vector3(10, 10, 10),
                distribution: SPE.distributions.SPHERE
            },
            maxAge: {
                value: 4
            },
            // duration: 1,
            activeMultiplier: 2000,
            velocity: {
                value: new THREE.Vector3(8, 3, 10),
                distribution: SPE.distributions.SPHERE
            },
            size: {
                value: 400
            },
            color: {
                value: new THREE.Color(0.2, 0.2, 0.2)
            },
            opacity: {
                value: [0, 0.6, 0]
            }
        });

        this.flash = new SPE.Emitter({
            particleCount: 20,
            duration: 0.5,
            position: {
                spread: new THREE.Vector3(5, 5, 5)
            },
            velocity: {
                spread: new THREE.Vector3(20),
                distribution: SPE.distributions.SPHERE
            },
            size: {
                value: [2, 20, 20, 20]
            },
            maxAge: {
                value: 0.5
            },
            activeMultiplier: 10,
            opacity: {
                value: [0.5, 0.25, 0, 0]
            }
        });
    }

    /**
     *
     * @param {Scene|Object3D} obj
     * @param {Vector3} position
     * @returns {ShaderFire}
     */
    setTo(obj, position) {
        this.group
            .addEmitter(this.fireball)
            .addEmitter(this.flash);

        // this.shockwaveGroup
        //     .addEmitter(this.debris)
        //     .addEmitter(this.mist);

        // this.group.mesh.position.z = -2000;
        // this.shockwaveGroup.mesh.position.z = -100;

        if (position) {
            this.group.mesh.position.copy(position);
            // this.shockwaveGroup.mesh.position.copy(position);
        }


        // obj.add(this.shockwaveGroup.mesh);
        obj.add(this.group.mesh);
        return this;
    }

    /**
     *
     * @param {Scene|Object3D} object
     * @returns {ShaderFire}
     */
    removeFrom(object) {
        object.remove(this.group.mesh);
        return this;
    }

    update() {
        this.group.tick();
        // this.shockwaveGroup.tick();
    }
}

export default ShaderFire;