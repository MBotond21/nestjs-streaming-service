import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SongsService {
  db: PrismaService

  constructor(db: PrismaService){
    this.db = db
  }

  create(createSongDto: CreateSongDto) {
    return this.db.song.create({
      data: createSongDto
    })
  }

  async findAll() {
    return await this.db.song.findMany();
  }

  async findOne(id: number) {
    return await this.db.song.findUnique({
      where: { id }
    });
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    return await this.db.song.update({
      data: updateSongDto,
      where: { id }
    });
  }

  async remove(id: number) {
    return await this.db.song.delete({
      where: { id }
    });
  }
}
