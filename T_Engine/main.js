import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let isPerspectiveCamera = false;

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

// controls

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 20;
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI / 2;



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

const bbc_texture = textureLoader.load('./bbc.png');
bbc_texture.colorSpace = THREE.SRGBColorSpace
const bbc_geometry = new THREE.PlaneGeometry(1920, 1080);
const bbc_material = new THREE.MeshBasicMaterial({ map: bbc_texture, side: THREE.DoubleSide });
const bbc_rectangle = new THREE.Mesh(bbc_geometry, bbc_material);
bbc_rectangle.position.x = 1920 / 2;
bbc_rectangle.position.y = -1080 / 2;
scene.add(bbc_rectangle);

//green box

const geometry = new THREE.BoxGeometry(30, 30, 30);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// helper

scene.add(new THREE.AxesHelper(1000));


//grid helper

const helper = new THREE.GridHelper(4000, 400);
helper.position.y = 0;
helper.material.opacity = 0.25;
helper.material.transparent = true;
scene.add(helper);

// Toggle camera on 'c'

document.addEventListener('keydown', function (event) {
	if (event.key === 'c') {
		toggleCamera();
	}
});

// Toggle camera on touch

document.addEventListener('touchstart', function (event) {
	toggleCamera();
});

// Function to toggle camera

function toggleCamera() {
	isPerspectiveCamera = !isPerspectiveCamera;
}

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	if (isPerspectiveCamera) {
		renderer.render(scene, camera);
	} else {
		renderer.render(scene, camera_ortho);
	}
}

animate();