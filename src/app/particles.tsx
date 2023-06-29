'use client';

import { useCallback } from 'react';
import { Particles as ReactParticles } from 'react-particles';

import { loadSlim } from 'tsparticles-slim';
import { loadDestroyUpdater } from 'tsparticles-updater-destroy';
import { loadRollUpdater } from 'tsparticles-updater-roll';
import { loadTiltUpdater } from 'tsparticles-updater-tilt';
import { loadTwinkleUpdater } from 'tsparticles-updater-twinkle';
import type { Engine } from 'tsparticles-engine';

export default function Particles(props: { id: string; className?: string }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    await loadRollUpdater(engine);
    await loadTiltUpdater(engine);
    await loadTwinkleUpdater(engine);
    await loadDestroyUpdater(engine);
  }, []);

  return (
    <ReactParticles
      id={props.id}
      init={particlesInit}
      options={{
        name: 'Link Triangles',
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
            },
          },
          color: {
            value: '#ffffff',
            animation: {
              enable: true,
              speed: 10,
              sync: true,
            },
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: 'random',
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: true,
              color: '#d2d9ff',
              opacity: 0.1,
            },
          },
          move: {
            enable: true,
            speed: 6,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            onClick: {
              enable: false,
              mode: 'push',
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
            },
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
        background: {
          color: '#2b72ff',
        },
      }}
      params={{
        fullScreen: {
          zIndex: -1,
          enable: false,
        },
      }}
      width="100vw"
      height="100vh"
      className={props.className}
    />
  );
}
