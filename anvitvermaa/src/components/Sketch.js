import { useEffect, useRef, useState } from "react";
import p5 from "p5";

export function Sketch() {
  const sketchRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const sketch = (p) => {
      let particles = [];
      let noiseFactor = 2;
      let mouseX = -1000,
        mouseY = -1000;

      p.setup = () => {
        let width = p.windowWidth - p.cmToPixels(2.7);
        let height = p.windowHeight - p.cmToPixels(2.7);

        p.createCanvas(width, height).parent(sketchRef.current);
        p.noStroke();

        for (let i = 0; i < 2500; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            size: p.random(1, 10),
            noiseX: p.random(10000),
            noiseY: p.random(10000),
            color: isDark ? "silver" : "#333",
          });
        }
      };

      p.draw = () => {
        p.background(isDark ? 0 : 255);
        for (let i = 0; i < p.width * p.height * 0.01; i++) {
          const shade = isDark ? p.random(20, 60) : p.random(200, 240);
          p.fill(shade, shade, shade, p.random(100, 150));
          p.rect(p.random(p.width), p.random(p.height), 1, 1);
        }

        for (let particle of particles) {
          let noiseValX = p.noise(particle.noiseX) * 2 - 0.5;
          let noiseValY = p.noise(particle.noiseY) * 2 - 0.5;

          let distToCursor = p.dist(particle.x, particle.y, mouseX, mouseY);
          let repulsion = p.map(
            distToCursor,
            0,
            p.width / 4,
            -4,
            0,
            true
          );

          particle.x +=
            noiseValX * 0.2 + repulsion * (mouseX - particle.x) * 0.007;
          particle.y +=
            noiseValY * 0.2 + repulsion * (mouseY - particle.y) * 0.007;

          if (particle.x > p.width) particle.x = 0;
          if (particle.x < 0) particle.x = p.width;
          if (particle.y > p.height) particle.y = 0;
          if (particle.y < 0) particle.y = p.height;

          const shade = isDark ? p.random(200, 255) : p.random(20, 80);
          p.fill(shade, shade, shade, p.random(100, 255));
          p.ellipse(
            particle.x,
            particle.y,
            p.random(0.5, 2),
            p.random(0.5, 2)
          );

          particle.noiseX += noiseFactor;
          particle.noiseY += noiseFactor;
        }
      };

      p.mouseMoved = () => {
        mouseX = p.mouseX;
        mouseY = p.mouseY;
      };

      p.cmToPixels = (cm) => cm * 37.8;
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => myP5.remove();
  }, [isDark]);

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
          boxShadow: `0px 0px 5px ${
            isDark ? "rgba(192,192,192,0.8)" : "rgba(51,51,51,0.8)"
          }`,
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
            fontFamily: "Montserrat,serif",
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