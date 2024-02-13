import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FlyControls } from 'three/addons/controls/FlyControls.js';

let isPerspectiveCamera = true;

const MARGIN = 0;
let SCREEN_HEIGHT = window.innerHeight - MARGIN * 2;
let SCREEN_WIDTH = window.innerWidth;

const clock = new THREE.Clock();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

//texture loader

//perspective camera

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.x = window.innerWidth / 2;
camera.position.y = -window.innerHeight / 2;
camera.position.z = 1000;

//ortho camera

const camera_ortho = new THREE.OrthographicCamera(0, window.innerWidth, 0, -window.innerHeight, -1000, 1000)



//renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);


//fly controls

const controls = new FlyControls( camera, renderer.domElement );
controls.movementSpeed = 1000;
controls.domElement = renderer.domElement;
controls.rollSpeed = Math.PI / 6;
controls.dragToLook = true;

//controls.autoForward = false;
controls.dragToLook = true;

// controls

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.minDistance = 20;
// controls.maxDistance = 50;
// controls.maxPolarAngle = Math.PI / 2;



// babbon rectangle

const textureLoader = new THREE.TextureLoader();
const babbon_texture = textureLoader.load('https://static.wikia.nocookie.net/villains/images/b/b7/I.R._Baboon.jpg');
babbon_texture.colorSpace = THREE.SRGBColorSpace
const babbon_geometry = new THREE.PlaneGeometry(200, 200);
const babbon_material = new THREE.MeshBasicMaterial({ map: babbon_texture, side: THREE.DoubleSide });
const babbon_rectangle = new THREE.Mesh(babbon_geometry, babbon_material);
babbon_rectangle.position.x = 100;
babbon_rectangle.position.y = -100;
scene.add(babbon_rectangle);


// bbc rectangle

const bbc_texture = textureLoader.load('./images/bbc.png');
bbc_texture.colorSpace = THREE.SRGBColorSpace
const bbc_geometry = new THREE.PlaneGeometry(1920, 1080);
const bbc_material = new THREE.MeshBasicMaterial({ map: bbc_texture, side: THREE.DoubleSide, transparent: true, opacity: 1.0 });
const bbc_rectangle = new THREE.Mesh(bbc_geometry, bbc_material);
bbc_rectangle.position.x = 1920 / 2;
bbc_rectangle.position.y = -1080 / 2;
bbc_rectangle.position.z = 10;
scene.add(bbc_rectangle);

//green box

const geometry = new THREE.BoxGeometry(200, 200, 200);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.x = 500;
cube.position.y = -500;
scene.add(cube);

// helper

scene.add(new THREE.AxesHelper(1000));


//grid helper

const helper = new THREE.GridHelper(4000, 400);
helper.position.y = 0;
helper.material.opacity = 0.25;
helper.material.transparent = true;
scene.add(helper);

//site
// let site_width = 1920;
// let site_height = 64;
// let site_x = 0;
// let site_y = 0;
// const black_geometry = new THREE.PlaneGeometry( site_width, site_height );
// const black_material = new THREE.MeshBasicMaterial( {color: 0x00.0000, side: THREE.DoubleSide} );
// const black_plane = new THREE.Mesh( black_geometry, black_material );
// black_plane.position.setX(site_x + site_width/2);
// black_plane.position.setY(-site_y - site_height/2);
// scene.add( black_plane );

//Toggle bbc background

document.addEventListener('keydown', function (event) {
	if (event.key === 'x') {
		bbc_rectangle.visible = !bbc_rectangle.visible
	}
});

// Toggle camera on 'c'

document.addEventListener('keydown', function (event) {
	if (event.key === 'c') {
		toggleCamera();
	}
});

// Toggle camera on touch

// document.addEventListener('touchstart', function (event) {
// 	toggleCamera();
// });


let lastTouchTime = 0;
const doubleTapDelay = 300; // czas (w milisekundach), który uznajesz za double tap

document.addEventListener('touchstart', function(event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTouchTime;
    if (tapLength < doubleTapDelay && tapLength > 0) {
        // double tap detected
        toggleCamera();
        event.preventDefault(); // zapobiega domyślnym działaniom przeglądarki
    }
    lastTouchTime = currentTime;
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
	
	controls.update( delta );

	if (isPerspectiveCamera) {
		renderer.render(scene, camera);
	} else {
		renderer.render(scene, camera_ortho);
	}
}

animate();