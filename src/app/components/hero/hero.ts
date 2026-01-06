import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `<div class="w-full">
      <img
        src="assets/images/barco2.jpeg"
        alt="Barco"
        class="w-full h-auto object-cover shadow-lg"
      />
    </div>
    <section
      class="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-8 pb-12 md:pt-12 md:pb-20 px-4 overflow-hidden"
    >
      <!-- Fondo con efecto sutil -->
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"
        ></div>
      </div>

      <div class="container mx-auto text-center relative z-10">
        <!-- Logo/Título principal -->
        <div class="mb-6">
          <h1 class="text-4xl md:text-6xl font-bold mb-3 tracking-tight">Blue Star Service</h1>
          <div class="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p class="text-xl md:text-2xl font-light text-blue-100">
            Mantenimiento Submarino Profesional
          </p>
        </div>

        <!-- Descripción concisa -->
        <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Expertos en <span class="font-bold text-yellow-300">mantenimiento de cascos</span>,
          inspecciones submarinas y reparaciones<br class="hidden md:block" />
          <span class="text-blue-200 font-medium">sin necesidad de varar su embarcación</span>
        </p>

        <!-- Información de contacto inmediata -->
        <div class="mb-10">
          <div
            class="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
          >
            <svg class="w-6 h-6 mr-3 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"
              />
            </svg>
            <div class="text-left">
              <p class="text-sm text-blue-200">Llámanos directamente</p>
              <a href="tel:+13059050376" class="text-2xl font-bold hover:text-yellow-300 transition"
                >305-905-0376</a
              >
            </div>
          </div>
        </div>

        <!-- Botones de acción -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <a
            href="#contacto"
            class="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg flex-1 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"
              />
            </svg>
            Solicitar Presupuesto
          </a>
          <a
            href="tel:+13059050376"
            class="bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 font-bold py-3 px-8 rounded-full text-lg flex-1 transition duration-300 flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"
              />
            </svg>
            Llamar Ahora
          </a>
        </div>

        <!-- Texto de garantía -->
        <div class="mt-10 pt-6 border-t border-white/20">
          <div class="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
              <span>Servicio 24/7</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>Garantía de calidad</span>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                />
              </svg>
              <span>Respuesta rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section> `,
  styles: [],
})
export class Hero {}
