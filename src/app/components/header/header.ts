import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!-- Logo y nombre -->
          <div class="flex items-center space-x-3 mb-4 md:mb-0">
            <div class="flex items-center justify-center w-10 h-10 bg-white rounded-full">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  fill="#DC2626"
                  stroke="white"
                  stroke-width="2"
                />
                <path d="M2 22L22 2" stroke="white" stroke-width="2" />
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Blue Star Service</h1>
              <p class="text-sm text-blue-600 font-medium">Mantenimiento Submarino Profesional</p>
            </div>
          </div>

          <!-- Navegación para desktop -->
          <nav class="hidden md:flex items-center space-x-8">
            <a href="#inicio" class="text-gray-700 hover:text-blue-600 font-medium transition"
              >Inicio</a
            >
            <a href="#servicios" class="text-gray-700 hover:text-blue-600 font-medium transition"
              >Servicios</a
            >
            <a
              href="#sobre-nosotros"
              class="text-gray-700 hover:text-blue-600 font-medium transition"
              >Nosotros</a
            >
            <a href="#contacto" class="text-gray-700 hover:text-blue-600 font-medium transition"
              >Contacto</a
            >

            <!-- Teléfono destacado -->
            <div class="flex items-center ml-4">
              <div class="bg-blue-50 p-2 rounded-lg">
                <a
                  href="tel:+13059050376"
                  class="flex items-center text-blue-700 hover:text-blue-800 font-bold"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM5 6h1.5c.1 1.2.3 2.4.6 3.5L5.3 12c-.9-2.3-1.4-4.7-1.4-7.2 0-.3 0-.6.1-.8z"
                    />
                  </svg>
                  +1 (305) 905-0376
                </a>
                <p class="text-xs text-gray-500 mt-1">Disponible 24/7</p>
              </div>
            </div>
          </nav>

          <!-- Menú móvil -->
          <div class="md:hidden flex items-center space-x-4">
            <a
              href="tel:+13059050376"
              class="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"
                />
              </svg>
              Llamar
            </a>
            <button (click)="toggleMenu()" class="text-gray-700">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                @if (menuOpen) {
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
                } @else {
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                }
              </svg>
            </button>
          </div>
        </div>

        <!-- Menú móvil desplegable -->
        @if (menuOpen) {
        <div class="md:hidden mt-4 pb-4 border-t pt-4">
          <div class="flex flex-col space-y-4">
            <a href="#inicio" class="text-gray-700 hover:text-blue-600 font-medium py-2">Inicio</a>
            <a href="#servicios" class="text-gray-700 hover:text-blue-600 font-medium py-2"
              >Servicios</a
            >
            <a href="#sobre-nosotros" class="text-gray-700 hover:text-blue-600 font-medium py-2"
              >Nosotros</a
            >
            <a href="#contacto" class="text-gray-700 hover:text-blue-600 font-medium py-2"
              >Contacto</a
            >
          </div>
        </div>
        }
      </div>
    </header>
  `,
  styles: [],
})
export class Header {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
