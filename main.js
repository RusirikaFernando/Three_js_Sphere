import * as THREE from 'three';
import './style.css'
import gsap from "gsap" 
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
//scene
const scene = new THREE.Scene();

//Create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64) //3= radius (sizeof ball) , 64= make ball more smooth using more tangels
const material = new THREE.MeshStandardMaterial({ //define color
  color:'#00ff83',
})

const mesh = new THREE.Mesh(geometry,material); //mesh used to connect geometry and material
scene.add(mesh)

//sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}


//light
const light = new THREE.PointLight(0xffffff, 200, 100) //0xffffff, 1, 100
light.position.set(0, 10, 10)
scene.add(light)

//camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 20
scene.add(camera)


//renderr
const canvas = document.querySelector(".webg1")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

//controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 5

//resize
window.addEventListener("resize", () =>{
  //update sizes
  
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  renderer.setSize(sizes.width, sizes.height)

//update camera
camera.aspect = sizes.width / sizes.height;
camera.updateProjectionMatrix(); //

});

//render the scene again to reflect the changes
const loop =() => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()

//timeline
const tl = gsap.timeline({defaults:{duration: 1}})
tl.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})
tl.fromTo("nav", {y: "-100%"}, {y:"0%"})
t1.fromTo(".title", {opacity:0}, {opacity:1})