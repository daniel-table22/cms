import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'localhost',
      /\.trycloudflare\.com$/,
      /\.ngrok-free\.app$/,
    ],
  },
});