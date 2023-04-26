import * as THREE from 'three';
import Stats from 'stats.js';
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 10, 10, 10 );
  const material = new THREE.MeshBasicMaterial( { color: '#ffa500' } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 20;

  // 性能插件
  var stats = new Stats();
  stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild( stats.dom );

  function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    stats.update(); // 更新性能插件

    renderer.render( scene, camera );
  };

  // animate();
export default animate