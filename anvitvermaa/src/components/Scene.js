import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Sketch } from "./Sketch"; // ✅ Import P5.js sketch separately

export default function Scene() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", background: "black" }}>
      {/* ✅ Three.js Canvas */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Your Three.js objects go here */}
        </Suspense>
      </Canvas>

      {/* ✅ Overlay P5.js sketch */}
      <Sketch />
    </div>
  );
}
