import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prismaService: PrismaService) {}

  create(createEventDto: CreateEventDto) {
    console.log(createEventDto);
    return this.prismaService.event.create({
      data: {
        ...createEventDto,
        date: new Date(),
      },
    });
  }

  findAll() {
    return `This action returns all events`;
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({
      where: { id },
    });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}