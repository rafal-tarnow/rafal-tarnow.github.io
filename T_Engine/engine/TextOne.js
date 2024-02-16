import * as THREE from 'three';

import { TTFLoader } from 'three/addons/loaders/TTFLoader.js';
import { Font } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


class TextOne{
    constructor(scene, text, size, color){
        this.scene = scene;
        this.text = text;
        this.font = null;
        this.mesh = null;
        this.height = 0,
        this.size = size,
        this.hover = 30,
        this.curveSegments = 4,
        this.bevelThickness = 2,
        this.bevelSize = 1.5;
        this.color = color;
        this.mesh = new THREE.Mesh();

        const loader = new TTFLoader();

        loader.load('./fonts/ttf/BBCReithSans_Bd.ttf', json => this.onLoad(json));

    }

    onLoad(json){
            this.font = new Font( json );
            this.createText();
    }

    createText() {

        const textGeo = new TextGeometry( this.text, {

            font: this.font,

            size: this.size,
            height: this.height,
            curveSegments: this.curveSegments,

            bevelThickness: this.bevelThickness,
            bevelSize: this.bevelSize,
            bevelEnabled: false

        } );

        textGeo.computeBoundingBox();
        textGeo.computeVertexNormals();

        const centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
        const material = new THREE.MeshBasicMaterial({ color: this.color, side: THREE.DoubleSide });
   
        const matrix = this.mesh.matrix.clone();
        this.mesh.geometry.dispose();
        this.mesh.geometry = textGeo;
        this.mesh.material = material;
        this.mesh.applyMatrix4(matrix);
  
        //textMesh1.position.x = centerOffset;
        //textMesh1.position.y = this.hover;
        this.mesh.position.setZ(0.15);

        this.scene.add( this.mesh );
    }

    setX(x) {
        this.mesh.position.setX(x);
    }
    
    setY(y) {
        this.mesh.position.setY(-y);
    }

}

export default TextOne;