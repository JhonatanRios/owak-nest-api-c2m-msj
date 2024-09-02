import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  getWelcome(): string {
    return `
      <html>
        <body>
          <h1>Bienvenido a la API</h1>
          <p>Esta es la API para gestionar mensajes.</p>
          <ul>
            <li><strong>POST /messages:</strong> Envía un mensaje a la API.</li>
            <li><strong>GET /messages:</strong> Recupera todos los mensajes enviados.</li>
          </ul>
        </body>
      </html>
    `;
  }
}