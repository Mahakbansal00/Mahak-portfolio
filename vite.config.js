import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/Mahak-portfolio",  // <--- THIS IS THE KEY
});
