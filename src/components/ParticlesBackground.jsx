import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: {
                    color: "#ffffff",
                },
                particles: {
                    number: { value: 40 },
                    color: { value: "#000000" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: { min: 1, max: 5 } },
                    move: {
                        enable: true,
                        speed: 2,
                        outModes: { default: "bounce" },
                    },
                    links: {
                        enable: true,
                        distance: 100,
                        color: "#000000",
                        opacity: 0.4,
                        width: 1,
                    },
                },
            }}
        />
    );
}

export default ParticlesBackground;
