import { definePreset, palette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { Preset } from '@primeuix/themes/types';


export const MyAuraOrangePreset: Preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff4f0',
      100: '#ffe4d9',
      200: '#ffc4a8',
      300: '#ffa17a',
      400: '#ff7e4c',
      500: '#ff5a1f',   // Main CTA color
      600: '#e04a15',
      700: '#c03c0f',
      800: '#a12e08',
      900: '#821f00',
      950: '#5a1500'
    },
    success: palette('#10b981'), // Confirmé
    warning: palette('#fb923c'), // À organiser
    danger: palette('#ef4444'),  // Annulé
    info: palette('#6b7280')     // En attente / neutral
  },
  neutral: {
    surface: '#ffffff',         // Card background
    surfaceGround: '#f8f8f8',   // Page background
    border: '#e5e7eb',          // Border color
    text: '#374151',            // Main text
    textSecondary: '#6b7280'    // Secondary text
  },
  radius: {
    container: '8px',
    button: '9999px',           // Rounded button
    input: '8px',
    surface: '8px'
  }
});

