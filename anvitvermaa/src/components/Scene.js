import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Sketch } from "./Sketch";
import { Plane, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// Custom shader material for nebula-like background
const NebulaMaterial = shaderMaterial(
  { uTime: 0, uResolution: new THREE.Vector2() },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;
    void main() {
      vec2 uv = vUv;
      vec3 color = vec3(0.0);
      // Gradient with animated noise for ethereal nebula effect
      float noise = fract(sin(dot(uv + uTime * 0.05, vec2(12.9898, 78.233))) * 43758.5453);
      color = mix(vec3(0.1, 0.0, 0.2), vec3(0.0, 0.2, 0.4), uv.y + noise * 0.1);
      gl_FragColor = vec4(color, 0.3); // Semi-transparent to blend with p5.js
    }
  `
);

export default function Scene() {
  useEffect(() => {
    // Update resolution on window resize
    const handleResize = () => {
      const material = document.querySelector("nebulaMaterial");
      if (material) {
        material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <Plane args={[10, 10]} position={[0, 0, -1]}>
            <nebulaMaterial uResolution={[window.innerWidth, window.innerHeight]} uTime={0} />
          </Plane>
        </Suspense>
      </Canvas>
      <Sketch />
    </div>
  );
}