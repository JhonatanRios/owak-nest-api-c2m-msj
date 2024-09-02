import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  private messages: CreateMessageDto[] = [];

  create(createMessageDto: CreateMessageDto) {
    this.messages.push(createMessageDto);
    return createMessageDto;
  }

  findAll() {
    return this.messages;
  }
}
