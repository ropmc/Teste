import { PerspectiveCamera } from 'three';
import * as THREE from 'three'
import Experience from '../Utils/Experience.js'

export default class Environment {
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.setSunlight();
    }
 
    setSunlight(){
        this.sunLight = new THREE.DirectionalLight('#ffffff', 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(3000, 3000);
        this.sunLight.shadow.normalBias = 0.05;
        //const helper = new THREE.CameraHelper(this.sunLight.shadow.camera); //CAMERA SHADOW HELPER
        //this.scene.add(helper); // CAMERA SHADOW HELPER
        this.sunLight.position.set(-20, 7, -3);
        this.scene.add(this.sunLight);

        this.ambientLight = new THREE.AmbientLight('#ffffff', 1);
        this.scene.add(this.ambientLight)
    }

    resize() {
    }

    update(){
    }
}