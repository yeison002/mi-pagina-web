import { defineConfig } from 'vite';

export default defineConfig({
  base: '/cecytem-aculco/', // ⚠️ IMPORTANTE: nombre de tu repositorio
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        inicio: './src/pages/inicio.html',
        sobreNosotros: './src/pages/sobre-nosotros.html',
        misionVision: './src/pages/mision-vision.html',
        servicios: './src/pages/servicios.html',
        aliados: './src/pages/aliados.html',
        galeria: './src/pages/galeria.html',
        testimonios: './src/pages/testimonios.html',
        contacto: './src/pages/contacto.html',
        avisoPrivacidad: './src/pages/aviso-privacidad.html'
      }
    }
  }
});