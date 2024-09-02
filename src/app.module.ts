import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule],
  controllers: [AppController], // Añadir AppController aquí
  providers: [],
})
export class AppModule {}