tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 80,
            density: { enable: true, area: 800 }
        },
        color: { value: "#00a8cc" },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: { min: 1, max: 3 }
        },
        links: {
            enable: true,
            distance: 150,
            color: "#00a8cc",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab" // Lines will connect to your mouse
            },
            onClick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            grab: { distance: 140, links: { opacity: 1 } },
            push: { quantity: 4 }
        }
    },
    detectRetina: true
});