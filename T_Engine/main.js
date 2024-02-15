import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import Rectangle from './engine/Rectangle.js' //import default element
//import { Rectangle } from './engine/Rectangle' //import specifilc element
import Image from "./engine/Image.js"
import TextOne from "./engine/TextOne.js"

let isPerspectiveCamera = true;
let isGridVisible = false;
let isBackgroundPageVisible = false;

const MARGIN = 0;
let SCREEN_HEIGHT = window.innerHeight - MARGIN * 2;
let SCREEN_WIDTH = window.innerWidth;

const clock = new THREE.Clock();

const scene = new THREE.Scene();
//scene.background = new THREE.Color(0xf0f0f0);
scene.background = new THREE.Color(0xffffff);

//texture loader

//perspective camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.x = window.innerWidth / 2;
camera.position.y = -window.innerHeight / 2;
camera.position.z = 1000;

//ortho camera

const camera_ortho = new THREE.OrthographicCamera(0, window.innerWidth, 0, -window.innerHeight, -1000, 1000)


//renderer

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);


// controls

const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( SCREEN_WIDTH/2, -SCREEN_HEIGHT/2, 0 );
controls.update();



// babbon rectangle

const textureLoader = new THREE.TextureLoader();
const babbon_texture = textureLoader.load('https://static.wikia.nocookie.net/villains/images/b/b7/I.R._Baboon.jpg');
babbon_texture.colorSpace = THREE.SRGBColorSpace
const babbon_geometry = new THREE.PlaneGeometry(200, 200);
const babbon_material = new THREE.MeshBasicMaterial({ map: babbon_texture, side: THREE.DoubleSide });
const babbon_rectangle = new THREE.Mesh(babbon_geometry, babbon_material);
babbon_rectangle.position.x = 100;
babbon_rectangle.position.y = -100;
//scene.add(babbon_rectangle);


// bbc rectangle

const bbc_texture = textureLoader.load('./images/bbc.png');
bbc_texture.colorSpace = THREE.SRGBColorSpace
const bbc_geometry = new THREE.PlaneGeometry(1920, 1080);
const bbc_material = new THREE.MeshBasicMaterial({ map: bbc_texture, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
const bbc_rectangle = new THREE.Mesh(bbc_geometry, bbc_material);
bbc_rectangle.visible = isBackgroundPageVisible;
bbc_rectangle.position.x = 1920 / 2;
bbc_rectangle.position.y = -1080 / 2;
bbc_rectangle.position.z = 0;
scene.add(bbc_rectangle);

//green box

const geometry = new THREE.BoxGeometry(150, 150, 150);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.x = 500;
cube.position.y = 150;
scene.add(cube);

// helper

scene.add(new THREE.AxesHelper(1000));


//grid helper 100

const helper = new THREE.GridHelper(4000, 40);
helper.visible = isGridVisible;
helper.position.y = 0;
helper.position.z = 10;
helper.rotateX(THREE.MathUtils.degToRad(90));
helper.material.opacity = 0.75;
helper.material.transparent = true;
scene.add(helper);

//grid helper 10

const helper_10 = new THREE.GridHelper(4000, 400);
helper_10.visible = isGridVisible;
helper_10.position.y = 0;
helper_10.position.z = 10;
helper_10.rotateX(THREE.MathUtils.degToRad(90));
helper_10.material.opacity = 0.25;
helper_10.material.transparent = true;
scene.add(helper_10);

//site

const black_rect = new Rectangle(scene);
black_rect.setX(0);
black_rect.setY(0);
black_rect.setHeight(63);
black_rect.setWidth(1920);
black_rect.setColor(0x000000)

const image_1 = new Image(scene);
image_1.setSource('./images/img_1.jpg');
image_1.setX(329);
image_1.setY(133);
image_1.setWidth(616);
image_1.setHeight(347);


const image_2 = new Image(scene);
image_2.setSource('./images/img_2.jpg');
image_2.setX(960);
image_2.setY(133);
image_2.setWidth(300);
image_2.setHeight(170);

const image_3 = new Image(scene);
image_3.setSource('./images/img_3.jpg');
image_3.setX(1278);
image_3.setY(133);
image_3.setWidth(300);
image_3.setHeight(170);

const image_4 = new Image(scene);
image_4.setSource('./images/img_4.jpg');
image_4.setX(960);
image_4.setY(312);
image_4.setWidth(300);
image_4.setHeight(170);

const image_5 = new Image(scene);
image_5.setSource('./images/img_5.jpg');
image_5.setX(1278);
image_5.setY(312);
image_5.setWidth(300);
image_5.setHeight(170);

const image_6 = new Image(scene);
image_6.setSource('./images/img_6.jpg');
image_6.setX(329);
image_6.setY(573);
image_6.setWidth(403);
image_6.setHeight(226);

const image_7 = new Image(scene);
image_7.setSource('./images/img_7.jpg');
image_7.setX(750);
image_7.setY(573);
image_7.setWidth(403);
image_7.setHeight(226);

const image_8 = new Image(scene);
image_8.setSource('./images/img_8.jpg');
image_8.setX(1170);
image_8.setY(573);
image_8.setWidth(403);
image_8.setHeight(226);

const text_1 = new TextOne(scene);


//Toggle bbc background

document.addEventListener('keydown', function (event) {
	if (event.key === 'x') {
		isBackgroundPageVisible = !isBackgroundPageVisible
		bbc_rectangle.visible = isBackgroundPageVisible;
	}
});

//toggle grid

document.addEventListener('keydown', function (event) {
	if (event.key === 'z') {
		isGridVisible = !isGridVisible;

		helper.visible = isGridVisible;
		helper_10.visible = isGridVisible;
	}
});

// Toggle camera on 'c'

document.addEventListener('keydown', function (event) {
	if (event.key === 'c') {
		toggleCamera();
	}
});

// Function to toggle camera

function toggleCamera() {
	isPerspectiveCamera = !isPerspectiveCamera;
}

function animate() {
	const delta = clock.getDelta();

	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	babbon_rectangle.rotation.x += 0.01;
	babbon_rectangle.rotation.y += 0.01;

	if (isPerspectiveCamera) {
		renderer.render(scene, camera);
	} else {
		renderer.render(scene, camera_ortho);
	}
}

animate();