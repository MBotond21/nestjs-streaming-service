import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PrismaService } from 'prisma/prisma.service';
import { tr } from '@faker-js/faker/.';

@Injectable()
export class PlaylistsService {
  db: PrismaService

  constructor(db: PrismaService){
    this.db = db
  }

  create(createPlaylistDto: CreatePlaylistDto) {
    return this.db.playlist.create({
      data: createPlaylistDto
    });
  }

  // findAll() {
  //   return `This action returns all playlists`;
  // }

  findOne(id: number) {
    return this.db.playlist.findUnique({
      where: { id },
      include: {
        songs: true
      }
    });
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
