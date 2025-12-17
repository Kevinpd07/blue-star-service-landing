// footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
  <footer class="bg-gray-900 text-white pt-12 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Columna 1: Información de la empresa -->
        <div>
          <div class="flex items-center mb-6">
            <div class="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mr-3">
              <span class="text-white font-bold text-2xl">BS</span>
            </div>
            <h3 class="text-2xl font-bold">Blue Star Service</h3>
          </div>
          <p class="text-gray-400 mb-6">
            Expertos en mantenimiento submarino de embarcaciones. Servicios profesionales de inspección, limpieza y reparación sin necesidad de varar su barco.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Columna 2: Enlaces rápidos -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-blue-300">Servicios</h4>
          <ul class="space-y-3">
            <li><a href="#servicios" class="text-gray-400 hover:text-white transition hover:underline">Mantenimiento de Cascos</a></li>
            <li><a href="#servicios" class="text-gray-400 hover:text-white transition hover:underline">Inspecciones Submarinas</a></li>
            <li><a href="#servicios" class="text-gray-400 hover:text-white transition hover:underline">Cambio de Hélices</a></li>
            <li><a href="#servicios" class="text-gray-400 hover:text-white transition hover:underline">Reparaciones de Emergencia</a></li>
            <li><a href="#servicios" class="text-gray-400 hover:text-white transition hover:underline">Limpieza Antifouling</a></li>
          </ul>
        </div>

        <!-- Columna 3: Contacto -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-blue-300">Contacto</h4>
          <div class="space-y-4">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mt-1 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
              </svg>
              <span class="text-gray-400">info@bluestarservice.com</span>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mt-1 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
              </svg>
              <div>
                <a href="tel:+13059050376" class="text-white font-bold text-lg hover:text-blue-300 transition">+1 (305) 905-0376</a>
                <p class="text-sm text-gray-400">Llamadas y WhatsApp</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-blue-400 mt-1 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span class="text-gray-400">Área de Florida<br>Servicios en ubicación</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-gray-800 my-8"></div>

      <!-- Copyright -->
      <div class="text-center text-gray-500 text-sm">
        <p>© 2024 Blue Star Service. Todos los derechos reservados. | 
          <a href="#" class="hover:text-white transition">Política de Privacidad</a> • 
          <a href="#" class="hover:text-white transition">Términos de Servicio</a>
        </p>
        <p class="mt-2">Especialistas en mantenimiento submarino profesional</p>
      </div>
    </div>
  </footer>
  `,
  styles: []
})
export class Footer {}