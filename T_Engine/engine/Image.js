import * as THREE from 'three';

class Image {

    constructor(scene) {
        this.width = 100;
        this.height = 100;
        this.position = new THREE.Vector3(50, -75, 0)
        this.scene = scene;

        const geometry = new THREE.PlaneGeometry(this.width, this.height);
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const material = new THREE.MeshBasicMaterial({ color: randomColor, side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.setX(this.position.x);
        this.mesh.position.setY(this.position.y);
        this.mesh.position.setZ(this.position.z);
        this.mesh.translateX(this.width / 2);
        this.mesh.translateY(-this.height / 2);
        scene.add(this.mesh);

        this.addDebugBoundingBox();
    }

    calculateShape() {
        this.shape = new THREE.Shape();

        (function qmlRect(ctx, x, y, width, height) {
            ctx.moveTo(0, 0)
            ctx.lineTo(0, -height)
            ctx.lineTo(width, -height)
            ctx.lineTo(width, 0)
            ctx.lineTo(0, 0);
        })(this.shape, 0, 0, this.width, this.height);
    }

    addDebugBoundingBox() {
        this.calculateShape();

        const geometry = new THREE.ShapeGeometry(this.shape);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
        this.debugMesh = new THREE.LineLoop(geometry, material);
        this.debugMesh.position.setX(this.position.x);
        this.debugMesh.position.setY(this.position.y);
        this.debugMesh.position.setZ(this.position.z);

        this.scene.add(this.debugMesh);
    }

    addLineShape(mgroup, shape, color, x, y, z, rx, ry, rz, s) {
        // lines
        shape.autoClose = true;

        const points = shape.getPoints();
        const spacedPoints = shape.getSpacedPoints(50);

        const geometryPoints = new THREE.BufferGeometry().setFromPoints(points);
        const geometrySpacedPoints = new THREE.BufferGeometry().setFromPoints(spacedPoints);

        // solid line

        let line = new THREE.Line(geometryPoints, new THREE.LineBasicMaterial({ color: color }));
        line.position.set(x, y, z - 25);
        line.rotation.set(rx, ry, rz);
        line.scale.set(s, s, s);
        mgroup.add(line);
    }

    setX(x) {
        this.position.setX(x);

        this.mesh.position.setX(this.position.x);
        this.mesh.translateX(this.width / 2);

        this.debugMesh.position.setX(this.position.x);
    }
    setY(y) {
        this.position.setY(-y);

        this.mesh.position.setY(this.position.y);
        this.mesh.translateY(-this.height / 2);

        this.debugMesh.position.setY(this.position.y);
    }
    setHeight(height) {
        this.height = height;

        this.updateRectGeometry();
        this.updateDbgGeometry();
    }

    setWidth(width) {
        this.width = width;

        this.updateRectGeometry();
        this.updateDbgGeometry();
    }

    updateRectGeometry() {
        // Aktualizacja geometrii prostokąta
        this.mesh.geometry.dispose(); // Usunięcie starej geometrii
        this.mesh.geometry = new THREE.PlaneGeometry(this.width, this.height);
        this.mesh.position.setX(this.position.x);
        this.mesh.position.setY(this.position.y);
        this.mesh.position.setZ(this.position.z);
        this.mesh.translateX(this.width / 2);
        this.mesh.translateY(-this.height / 2);
    }

    updateDbgGeometry() {
        this.calculateShape();
        const geometry = new THREE.ShapeGeometry(this.shape);
        this.debugMesh.geometry.dispose(); // Usunięcie starej geometrii
        this.debugMesh.geometry = geometry;
    }

    setSource(source) {
        this.source = source;

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(source);
        texture.colorSpace = THREE.SRGBColorSpace
        const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        this.mesh.material = material;
    }
}

export default Image;