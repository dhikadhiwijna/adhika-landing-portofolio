import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    [],
  );

  return (
    <Particles
      id="tsparticles"
      className="translate-z-0 h-full w-full"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 90,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
        },
        modes: {
          push: { quantity: 90 },
          repulse: { distance: 200, duration: 0.4 },
        },
        particles: {
          color: { value: "#e68e2e" },
          links: {
            color: "#f5d393",
            distance: 200,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: {
            type: "circle",
          },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
