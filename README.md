# Dr. Juan G. Orellana — Landing page

Sitio estático en Astro 5 + Tailwind CSS 4. Una sola página, sin dependencias de runtime ni frameworks de UI.

## Uso

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Dónde se edita el contenido

Todo el texto variable (teléfono, correo, horarios, servicios, cobertura, enlaces) está en `src/data/site.ts`. Cambiar el número ahí actualiza el header, el hero, la barra fija móvil, la sección de contacto, el footer y el JSON-LD a la vez.

## Estructura

```
src/
  data/site.ts            datos del negocio
  layouts/Layout.astro    head, fuentes, metadatos, JSON-LD (Physician)
  components/
    Header.astro          botón flotante de llamada
    Hero.astro            titular, foto recortada, franja de indicadores
    Servicios.astro       tres tarjetas, fondo blanco y tipografía verde
    Contacto.astro        llamada, WhatsApp, correo y mapa
    Footer.astro          identidad, horarios, contacto y créditos
    BarraLlamada.astro    barra fija inferior, solo móvil
    Iconos.astro          SVG en línea
  pages/index.astro       composición + scripts
public/img/               foto en WebP (880 y 560 px) y PNG con transparencia
```

## Decisiones que conviene conocer

- **Foto**: se le quitó el fondo y se sirve en WebP con transparencia; el borde inferior se difumina por CSS (`.foto-difuminada`) para que el torso se funda con el degradado azul. Para cambiarla, reemplazar los archivos de `public/img/` manteniendo los nombres.
- **Estado en vivo**: el indicador del hero calcula la hora real de Venezuela (`America/Caracas`) y muestra si el doctor está atendiendo, si el sábado ya cerró o si es domingo de emergencias. La lógica está al final de `src/pages/index.astro`.
- **Barra fija móvil**: en pantallas menores a 1024 px hay una barra inferior con *Llamar ahora* y *WhatsApp*, porque el objetivo real de la página es la llamada.
- **SEO local**: el `<head>` incluye datos estructurados `Physician` con especialidad, teléfono, horarios y las cuatro ciudades de cobertura.
- **Accesibilidad**: foco visible, contraste alto, `prefers-reduced-motion` respetado y textos alternativos en la foto y el mapa.

## Antes de publicar

1. Cambiar `site` en `astro.config.mjs` por el dominio definitivo (afecta la URL canónica y la imagen de Open Graph).
2. Verificar el número y el correo en `src/data/site.ts`.
3. El mapa apunta a Lechería con un `iframe` público de Google Maps; si se quiere otro encuadre, reemplazar `mapaEmbed` en el mismo archivo.

## Despliegue

`npm run build` produce `dist/`, que se sube tal cual a Cloudflare Pages, Netlify o Vercel. En Cloudflare Pages: comando de build `npm run build`, directorio de salida `dist`.
