import * as THREE from 'three';
import './style.css'
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
renderer.render(scene, camera)