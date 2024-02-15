import * as THREE from 'three';

import { TTFLoader } from 'three/addons/loaders/TTFLoader.js';
import { Font } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


class TextOne{
    constructor(scene){
        this.scene = scene;
        this.text = 'Welcome to BBC.com';
        this.font = null;
        this.height = 0,
        this.size = 15.7,
        this.hover = 30,
        this.curveSegments = 4,
        this.bevelThickness = 2,
        this.bevelSize = 1.5;

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
        const material = new THREE.MeshBasicMaterial({ color: 0x4a4a4a, side: THREE.DoubleSide });
        const textMesh1 = new THREE.Mesh( textGeo, material );

        //textMesh1.position.x = centerOffset;
        //textMesh1.position.y = this.hover;
        textMesh1.position.x = 327;
        textMesh1.position.y = -114;
        textMesh1.position.z = 0;


        this.scene.add( textMesh1 );
    }

}

export default TextOne;