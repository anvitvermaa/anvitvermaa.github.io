import { useEffect, useRef, useState } from "react";
import p5 from "p5";

export function Sketch() {
  const sketchRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const sketch = (p) => {
      let particles = [];
      let connections = [];
      const numParticles = 150; // Reduced for performance, adjust as needed
      const connectionDistance = 50;
      const repulsionRadius = p.windowWidth / 4; // Matches your original range
      const repulsionStrength = 0.007; // Matches your original strength
      const springConstant = 0.01;
      const damping = 0.9;
      const stationaryThreshold = 3000; // 3 seconds
      let stationaryTimer = 0;
      let prevMouseX = -1000;
      let prevMouseY = -1000;
      let mouseSpeed = 0;
      let lineAlpha = 255;

      p.setup = () => {
        let width = p.windowWidth - p.cmToPixels(2.7);
        let height = p.windowHeight - p.cmToPixels(2.7);
        p.createCanvas(width, height).parent(sketchRef.current);
        p.noStroke();

        // Initialize particles with random positions
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            pos: p.createVector(p.random(p.width), p.random(p.height)),
            vel: p.createVector(0, 0),
            acc: p.createVector(0, 0),
            phase: p.random(p.TWO_PI), // For sparkling effect
          });
        }

        // Establish connections based on proximity
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            let d = p.dist(particles[i].pos.x, particles[i].pos.y, particles[j].pos.x, particles[j].pos.y);
            if (d < connectionDistance) {
              connections.push([i, j, d]); // Store indices and rest length
            }
          }
        }
      };

      p.draw = () => {
        p.background(isDark ? 0 : 255);

        // Calculate mouse speed for glowing
        let dx = p.mouseX - prevMouseX;
        let dy = p.mouseY - prevMouseY;
        mouseSpeed = p.sqrt(dx * dx + dy * dy);
        prevMouseX = p.mouseX;
        prevMouseY = p.mouseY;

        // Update stationary timer
        if (mouseSpeed < 1) {
          stationaryTimer += p.deltaTime;
        } else {
          stationaryTimer = 0;
        }
        let meshBroken = stationaryTimer > stationaryThreshold;

        // Adjust line visibility
        if (meshBroken) {
          lineAlpha -= 5;
          if (lineAlpha < 0) lineAlpha = 0;
        } else {
          lineAlpha += 5;
          if (lineAlpha > 255) lineAlpha = 255;
        }

        // Apply forces to particles
        for (let particle of particles) {
          // Repulsion from cursor (similar to your original logic)
          let distToCursor = p.dist(particle.pos.x, particle.pos.y, p.mouseX, p.mouseY);
          let repulsion = p.map(distToCursor, 0, p.width / 4, -4, 0, true);
          if (distToCursor < repulsionRadius) {
            let forceMagnitude = repulsion * repulsionStrength;
            if (meshBroken) forceMagnitude *= 2; // Stronger repulsion when lines break
            let force = p.createVector(p.mouseX, p.mouseY).sub(particle.pos).normalize().mult(forceMagnitude);
            particle.acc.add(force);
          }

          // Apply spring forces if mesh is not broken
          if (!meshBroken) {
            for (let conn of connections) {
              let p1 = particles[conn[0]];
              let p2 = particles[conn[1]];
              if (p1 === particle || p2 === particle) {
                let other = p1 === particle ? p2 : p1;
                let distVec = p.createVector(other.pos.x, other.pos.y).sub(particle.pos);
                let currentDist = distVec.mag();
                if (currentDist > 0) {
                  let forceMagnitude = springConstant * (currentDist - conn[2]);
                  let force = distVec.copy().normalize().mult(forceMagnitude);
                  if (p1 === particle) {
                    particle.acc.add(force);
                  } else {
                    particle.acc.sub(force);
                  }
                }
              }
            }
          }
        }

        // Update particle positions
        for (let particle of particles) {
          particle.vel.add(particle.acc);
          particle.vel.mult(damping);
          particle.pos.add(particle.vel);
          particle.acc.mult(0);

          // Wrap particles around canvas edges (like your original code)
          if (particle.pos.x > p.width) particle.pos.x = 0;
          if (particle.pos.x < 0) particle.pos.x = p.width;
          if (particle.pos.y > p.height) particle.pos.y = 0;
          if (particle.pos.y < 0) particle.pos.y = p.height;
        }

        // Draw connections with glowing effect when mouse moves
        if (lineAlpha > 0) {
          let glow = p.map(mouseSpeed, 0, 10, 0, 100); // Glow based on mouse speed
          p.stroke(isDark ? 255 : 50, p.constrain(lineAlpha + glow, 0, 255));
          p.strokeWeight(0.2); // Very thin lines (thinner than dots)
          for (let conn of connections) {
            let p1 = particles[conn[0]];
            let p2 = particles[conn[1]];
            let currentDist = p.dist(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y);
            if (currentDist < connectionDistance * 1.5) { // Break if stretched too far
              p.line(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y);
            }
          }
        }

        // Draw sparkling dots
        p.noStroke();
        for (let particle of particles) {
          let sparkle = p.sin(p.frameCount * 0.1 + particle.phase) * 0.5 + 0.5;
          let size = 1 + sparkle * 1; // Small dots (1-2 pixels)
          p.fill(isDark ? 255 : 50, 200 + sparkle * 55); // Sparkle effect
          p.ellipse(particle.pos.x, particle.pos.y, size, size);
        }
      };

      p.mouseMoved = () => {
        // Update mouse position (consistent with your original code)
        prevMouseX = p.mouseX;
        prevMouseY = p.mouseY;
      };

      p.windowResized = () => {
        let width = p.windowWidth - p.cmToPixels(2.7);
        let height = p.windowHeight - p.cmToPixels(2.7);
        p.resizeCanvas(width, height);
      };

      p.cmToPixels = (cm) => cm * 37.8;
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => myP5.remove();
  }, [isDark]);

  // Portfolio UI (unchanged from your original code)
  return (
    <>
      <div
        ref={sketchRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: `1px solid ${isDark ? "silver" : "#333"}`,
          boxShadow: `0px 0px 5px ${isDark ? "rgba(192,192,192,0.8)" : "rgba(51,51,51,0.8)"}`,
        }}
      >
        {/* Name and Bio */}
        <div
          style={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            color: isDark ? "silver" : "#333",
            fontFamily: "Montserrat, sans-serif",
            maxWidth: "400px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "300",
              letterSpacing: "0.1em",
              margin: "0",
            }}
          >
            Anvit Verma
          </h1>
          <div
            style={{
              fontSize: "1rem",
              letterSpacing: "0.4em",
              marginTop: "0.5rem",
              opacity: "0.8",
            }}
          >
            <p style={{ margin: "0.2rem 0" }}>AIML | Developer</p>
          </div>
        </div>

        {/* Bottom Right Text */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            color: isDark ? "silver" : "#333",
            fontFamily: "Montserrat, serif",
            fontSize: "1rem",
            textAlign: "left",
          }}
        >
          {currentPage === "home" && (
            <>
              <p><b>Born in 2004, Mumbai, India.</b></p>
              <p><b>Pursuing computer science</b></p>
              <p><b>Building, Breaking and Redefining</b></p>
              <p><b>Exploring the edge of technology</b></p>
              <p><b>through development and research.</b></p>
            </>
          )}
          {currentPage === "projects" && (
            <p>
              <a
                href="https://github.com/ishaanshri123/ai-doc-summarizer"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                AI Text Summarizer
              </a>
            </p>
          )}
          {currentPage === "research" && (
            <p>
              <a
                href="https://github.com/anvitvermaa/Perception-Challenges-in-Autonomous-Vehicle"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Perception Challenges in Autonomous Vehicles
              </a>
            </p>
          )}
        </div>

        {/* Navigation */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "2rem",
            display: "flex",
            gap: "2rem",
            color: isDark ? "silver" : "#333",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <button
            onClick={() => setCurrentPage("home")}
            style={{
              background: "transparent",
              border: "none",
              color: "inherit",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              cursor: "pointer",
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            HOME
          </button>
          <button
            onClick={() => setCurrentPage("projects")}
            style={{
              background: "transparent",
              border: "none",
              color: "inherit",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              cursor: "pointer",
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            PROJECTS
          </button>
          <button
            onClick={() => setCurrentPage("research")}
            style={{
              background: "transparent",
              border: "none",
              color: "inherit",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              cursor: "pointer",
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            RESEARCH WORK
          </button>
        </div>
      </div>
    </>
  );
}