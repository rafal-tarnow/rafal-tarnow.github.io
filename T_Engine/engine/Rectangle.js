import * as THREE from 'three';

class Rectangle {

    constructor(scene) {
        this.width = 1920;
        this.height = 64;
        this.x = 0;
        this.y = 0;
        const black_geometry = new THREE.PlaneGeometry( this.width, this.height );
        const black_material = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
        this.black_plane = new THREE.Mesh( black_geometry, black_material );
        this.black_plane.position.setX(this.x + this.width/2);
        this.black_plane.position.setY(-this.y - this.height/2);
        scene.add( this.black_plane );
    }

    setX(x){
        this.x = x;
        this.black_plane.position.setX(this.x + this.width/2);
    }

    setY(y){
        this.y = y;
        this.black_plane.position.setY(-this.y - this.height/2);
    }

    print() {
       console.log("Hi, 1 I'm Rectangle.");
    }
}

export default Rectangle;