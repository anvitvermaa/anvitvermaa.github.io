import { Sketch } from "./Sketch";

export default function Scene() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", background: "black" }}>
      <Sketch />
    </div>
  );
}