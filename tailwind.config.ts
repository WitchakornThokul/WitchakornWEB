import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0e27',
        panel: '#12173d',
        panelSoft: '#1a2447',
        accent: '#00d9ff',
        accentSoft: '#4dd9ff',
        accentDark: '#0099cc',
        line: 'rgba(0, 217, 255, 0.12)'
      },
      boxShadow: {
        glow: '0 0 30px rgba(0, 217, 255, 0.2)',
        glowLg: '0 0 60px rgba(0, 217, 255, 0.15)',
        card: '0 8px 32px rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)',
        'gradient-dark': 'linear-gradient(135deg, #12173d 0%, #1a2447 100%)'
      }
    }
  },
  plugins: []
};

export default config;
