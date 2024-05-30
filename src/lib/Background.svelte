<script>
    import { onMount } from "svelte";
    import bicolor_cat from "/src/assets/3d_models/bicolor_cat/scene.gltf";

    import * as THREE from "three";
    import WebGL from "three/addons/capabilities/WebGL.js";
    import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

    import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
    import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
    import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
    import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

    function main() {
        // check if webgl is available
        if (!WebGL.isWebGLAvailable()) {
            const warning = WebGL.getWebGLErrorMessage();
            document.getElementById("container").appendChild(warning);
            return;
        }

        // config
        const cameraDistance = 0.5;
        const lightDistance = 0.4;

        // window size
        const sizes = {};
        function updateWindowSize() {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            sizes.windowHalfX = sizes.width / 2;
            sizes.windowHalfY = sizes.height / 2;
        }
        updateWindowSize();

        // setup
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(sizes.width, sizes.height);
        document.getElementById("background").appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111111);

        const camera = new THREE.PerspectiveCamera(
            140,
            sizes.width / sizes.height,
            0.1,
            1000,
        );
        camera.position.z = cameraDistance;

        // postprocessing
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(sizes.width, sizes.height),
            1.5,
            0.4,
            0.85,
        );
        bloomPass.threshold = 0.1;
        bloomPass.strength = 0.3;
        bloomPass.radius = 0.1;
        composer.addPass(bloomPass);
        composer.addPass(new OutputPass());

        // update camera on window resize
        function updateCamera() {
            updateWindowSize();
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
            renderer.setSize(sizes.width, sizes.height);
        }
        window.addEventListener("resize", updateCamera);

        // objects
        const light = new THREE.PointLight(0xffffff, 0.03, 0, 6);
        light.position.z = lightDistance;
        scene.add(light);
        // const lightHelper = new THREE.PointLightHelper(light);
        // scene.add(lightHelper);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        var model;
        const loader = new GLTFLoader();
        loader.load(
            bicolor_cat,
            function (gltf) {
                model = gltf.scene;
                var scale = 1;
                model.scale.set(scale, scale, scale);

                scene.add(model);
            },
            undefined,
            function (error) {
                console.error(error);
            },
        );

        function addStar() {
            const geometry = new THREE.SphereGeometry(0.15, 3, 3);
            const material = new THREE.MeshStandardMaterial({
                emissive: 0xffffff,
            });
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(300).fill().forEach(addStar);

        // interaction
        let mouseX, mouseY, targetX, targetY;
        function onDocumentMouseMove(event) {
            mouseX = event.clientX - sizes.windowHalfX;
            mouseY = event.clientY - sizes.windowHalfY;
        }
        document.addEventListener("mousemove", onDocumentMouseMove);

        function animateScroll() {
            const t = document.body.getBoundingClientRect().top;
            const modelZ = t * -0.02 + 3;
            model.position.z = modelZ;
            camera.position.z = modelZ + cameraDistance;
            light.position.z = modelZ + lightDistance;
            model.rotation.y -= 0.2 + t * 0.0001;
            model.rotation.x = t * 0.008;
        }
        document.body.onscroll = animateScroll;

        function animateConstant() {
            targetX = mouseX * 0.001;
            targetY = mouseY * -0.001;
            light.position.set(targetX, targetY, light.position.z);
            model.rotation.y += 0.002;
        }

        // main loop
        function animate() {
            requestAnimationFrame(animate);
            composer.render();
            animateConstant();
        }
        animate();
    }

    onMount(main);
</script>

<span id="background"></span>

<style>
    #background {
        width: 100vw;
        height: 100vh;
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -9999;
        pointer-events: none;
    }
    /* canvas { */
</style>
